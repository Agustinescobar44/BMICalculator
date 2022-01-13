import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi:number;
  resultado="";
  interpretacion="";
  constructor(private route:ActivatedRoute) {
    this.bmi = +route.snapshot.paramMap.get('valor')!; 

    this.interpretar();
  }
  ngOnInit(): void {
  }
  interpretar():void{
    if(this.bmi<18.4){
      this.resultado = "Bajo peso"
      this.interpretacion= "Estas por debajo del peso recomendado, deberias ajustar tu dieta"
    }
    else if(this.bmi <24.9){
      this.resultado = "Normal"
      this.interpretacion= "Estas en el peso recomendado , Bien hecho!"
    }
    else if(this.bmi <29.9){
      this.resultado = "Sobre Peso"
      this.interpretacion= "Estas por enscima del peso recomendado, considera hacer ejercicio"
    }
    else{
      this.resultado = "Obesidad"
      this.interpretacion= "Estas muy por enscima del peso recomendado, es necesario ejercicio y ajustar la diera urgente"
    }
  }
}
