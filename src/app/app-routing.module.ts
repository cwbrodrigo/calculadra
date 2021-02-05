import { CalculadoraModule } from './calculadora/calculadora.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), CalculadoraModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
