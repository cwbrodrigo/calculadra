import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1 = '';
  private numero2 = '';
  private resultado = 0;
  private operacao = '';

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  limpar():void{
    this.numero1 = '0';
    this.numero2 = '';
    this.resultado = 0;
    this.operacao = '';
  }

}
