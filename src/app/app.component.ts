import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from "./components/acerca-de/acerca-de.component";
import { ExperienciaComponent } from "./components/experiencia/experiencia.component";
import { EducacionComponent } from "./components/educacion/educacion.component";

import { NgCircleProgressModule } from 'ng-circle-progress';

import { HysComponent } from "./components/hys/hys.component";

import { ProyectosComponent } from "./components/proyectos/proyectos.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, AcercaDeComponent, ExperienciaComponent, EducacionComponent, NgCircleProgressModule, HysComponent, ProyectosComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Jota';
}


@NgModule({
  declarations: [
    Component
  ],
  imports: [
    BrowserModule,

    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,

    })

  ],
  providers: [],
  bootstrap: [Component]
})
export class AppModule { }