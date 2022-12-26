import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-top-inicio',
  templateUrl: './top-inicio.component.html',
  styleUrls: ['./top-inicio.component.css']
})
export class TopInicioComponent implements OnInit {
  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.miPortfolio=data;
    })
  }

}
