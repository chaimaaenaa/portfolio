import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Gestion de Location de Voiture',
      description: 'Application web pour la gestion de location de véhicules avec système de réservation en ligne.',
      image: 'assets/images/car-rental.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/votre-compte/car-rental'
    },
    {
      title: 'Gestion de Panne',
      description: 'Système de suivi et de gestion des pannes pour la Province de Beni Mellal.',
      image: 'assets/images/maintenance.jpg',
      technologies: ['React', 'Express', 'MySQL'],
      githubLink: 'https://github.com/votre-compte/maintenance-system'
    }
  ];
}
