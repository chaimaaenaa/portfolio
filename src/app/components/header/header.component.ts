import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  downloadCV() {
    // Logique pour télécharger le CV
  }
}
