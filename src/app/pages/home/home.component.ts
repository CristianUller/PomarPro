import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  HomeService  } from '../../services/home.service';



@Component({
  selector: 'app-produto',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor(
    private HomeService:HomeService,
    private snackbar:MatSnackBar
    
  ){
    this.buscahome()
  }



  produto:FormGroup = new FormGroup({ 
    id:new FormControl(null),
    
    produto:new FormControl('', Validators.required),
    saida:new FormControl('',Validators.required ),
    entrada:new FormControl('',Validators.required),
  
    
   


  })
  
  relatorio:any[] = [];


  buscahome(){
    this.HomeService.gethome().subscribe({
      next:(resposta)=>{
        console.log(resposta);
        this.relatorio = resposta.body;
    },
    error:(erro)=>{
      console.log(erro)
    }

    })
  }

  }