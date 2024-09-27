import { Component, OnInit } from '@angular/core';
import { ChurnService } from '../churn.service';
import { LoadingService } from 'src/app/service/loading.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-churn',
  templateUrl: './churn.component.html',
  styleUrls: ['./churn.component.css']
})
export class ChurnComponent implements OnInit {

  likeClientName: string = '';
  churnForm!: FormGroup;
  loading!: Observable<boolean>;
  dataSource: any[] = [];

  constructor(private churnService: ChurnService,
    private loadingService: LoadingService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    
    // Validação entrada de dados
    this.churnForm = this.fb.group({
      client_name: ['', [Validators.required]], // Nome do cliente
      credit_score: [null, [Validators.required, Validators.min(0)]], // Pontuação de crédito
      country: ['', [Validators.required]], // País de residência
      gender: ['', [Validators.required]], // Gênero
      age: [null, [Validators.required, Validators.min(10)]], // Idade
      tenure: [null, [Validators.required, Validators.min(0)]], // Anos de conta
      balance: [null, [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]], // Saldo da conta
      products_number: [null, [Validators.required, Validators.min(0)]], // Número de produtos
      credit_card: [null, [Validators.required]], // Cartão de crédito (sim ou não)
      active_member: [null, [Validators.required]], // Membro ativo (sim ou não)
      estimated_salary:  [null, [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]] // Salário estimado
    });

    this.loading = this.loadingService.loading$;
    this.atualizarGrid();
  }

  // Atualizar grid
  atualizarGrid(){
    this.churnService.BuscaListaPredicaoRotatividadeCliente(this.likeClientName).subscribe( (response: any)=>{
        this.dataSource = response.bankcustomerchurns;
    }, (error:any) => {
      Swal.fire('Ocorreu falha no carregamento da grid!');
    });
  }

  // Adicionar predição
  onSubmit(): void {
    if (this.churnForm.valid) {
      this.churnService.AdicionaPredicaoRotatividadeCliente(this.churnForm.value).subscribe( (response: any)=>{
        Swal.fire('Cadastro da Predição do cliente '+ response.client_name + ' efetuado com sucesso!');
        this.atualizarGrid();
        this.churnForm.reset();
      }, (error:any) => {
        Swal.fire(error.error.mesage);
      })
      
    } else { 
      Swal.fire('Formulário inválido!');
      this.atualizarGrid();
    }

  }

  // Remover predição  
  ExcluirItem(id: any){

    Swal.fire({
      title: 'Confirma exclusão?',
      text: 'Removendo Predição de Rotatividade de Cliente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText:('Sim'),
      cancelButtonText: 'Não'
      
    }).then((result) => {    

      if(result.value){
          this.churnService.RemovePredicaoRotatividadeCliente(id).subscribe( (response: any)=>{
            Swal.fire( response.mensagem );
            this.atualizarGrid();
        }, (error:any) => {
            Swal.fire('Ocorreu falha ao exluir registro!');
          });
        }
      },

    );
  }
}
