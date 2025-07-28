import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatIconModule, MatProgressBarModule, MatTabsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  // Skill proficiency levels
  skillLevels: { [key: string]: number } = {
    'Angular': 90,
    'TypeScript': 85,
    'JavaScript': 85,
    'HTML': 95,
    'CSS': 90,
    'SASS': 80,
    'RxJS': 75,
    'Node.js': 70,
    'Java': 65,
    'Python': 70,
    'SQL': 75,
    'Git Version Control': 85,
    'RESTful APIs': 85,
    'Agile Methodologies': 80,
    'Unit Testing': 75,
    'Code Reviews': 80
  };

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getSkills().subscribe(skills => {
      this.skills = skills;
    });
  }

  getSkillLevel(skillName: string): number {
    return this.skillLevels[skillName] || 70;
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Frontend Technologies': 'web',
      'Backend Technologies': 'storage',
      'Database': 'data_usage',
      'Development Practices': 'build',
      'Soft Skills': 'people'
    };
    return icons[category] || 'star';
  }
}