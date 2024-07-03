import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../service/usuario.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrl: './cad-usuario.component.scss'
})
export class CadUsuarioComponent {

  constructor(
    private usuarioService:UsuarioService
  ){

  }


  //inicia o formulario
  formulario:FormGroup = new FormGroup({ 
    id:new FormControl(null),
    nome:new FormControl('', Validators.required),
    sobrenome:new FormControl('',Validators.required ),
    endereco:new FormControl('',Validators.required),
    telefone:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    login:new FormControl('',Validators.required),
   


  })

  //metodos dos controles do formulario
  onIncluir(){
    this.formulario.reset();
    this.formulario.enable();
  }

 
  onSalvar(){
    //guarda as informacoes em uma variavel pra melhorar o processo
    let info = this.formulario.value;
    //verifica se esta inserindo ou alterando com base no valor do id (se for null, esta inserindo, senao esta alterando)


    if(info.id = null){
      //ira inserir no banco de dados um usuario
      this.usuarioService.addUsuario(info).subscribe({
        next:(resposta)=>{
          console.log(resposta)

        },
        error:(erro)=>{
          console.log(erro)

        }
      })
    }else{
      //ira alterar o usuario no banco de dados

    }

  }

  onCancelar(){
    this.formulario.reset();
    this.formulario.disable();
  }




}
