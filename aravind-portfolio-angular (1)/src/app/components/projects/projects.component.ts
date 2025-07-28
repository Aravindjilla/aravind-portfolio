import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatIconModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  viewProject(projectName: string): void {
    console.log('Viewing project:', projectName);
    alert(`Project details for "${projectName}" would be displayed here or redirect to a detailed view.`);
  }

  getProjectIcon(index: number): string {
    const icons = ['school', 'home', 'credit_card'];
    return icons[index] || 'work';
  }

  getProjectCategory(index: number): string {
    const categories = ['Education Management', 'Community Platform', 'Fintech Solution'];
    return categories[index] || 'Web Application';
  }
}