import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './comoponentes/top-header/top-header.component';
import { TopInicioComponent } from './comoponentes/top-inicio/top-inicio.component';
import { CuerpoComponent } from './comoponentes/cuerpo/cuerpo.component';
import { FooterComponent } from './comoponentes/footer/footer.component';
import { AboutMeComponent } from './comoponentes/about-me/about-me.component';
import { ExperienciaComponent } from './comoponentes/experiencia/experiencia.component';
import { EducacionComponent } from './comoponentes/educacion/educacion.component';
import { SkillsComponent } from './comoponentes/skills/skills.component';
import { ProjectsComponent } from './comoponentes/projects/projects.component';
import { PortfolioService } from './servicios/portfolio.service';
import { LoginComponent } from './comoponentes/login/login.component';
import { PortfolioComponent } from './comoponentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent, 
    TopHeaderComponent, 
    TopInicioComponent, 
    CuerpoComponent, 
    FooterComponent, 
    AboutMeComponent, 
    ExperienciaComponent, 
    EducacionComponent, 
    SkillsComponent, 
    ProjectsComponent, LoginComponent, PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
