import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  
  
  //inicialização do formulario reativo
  form = new FormGroup({
    usuario:new FormControl(),
    senha:new FormControl()


  })

  //metodo para testar o login
  onLogin(){
    console.log(this.form.value)

  }











}
