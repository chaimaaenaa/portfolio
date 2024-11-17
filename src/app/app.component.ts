import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    ProjectsComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <app-header></app-header>
    <app-projects></app-projects>
  `,
  styles: []
})
export class AppComponent {
  title = 'portfolio';
}
