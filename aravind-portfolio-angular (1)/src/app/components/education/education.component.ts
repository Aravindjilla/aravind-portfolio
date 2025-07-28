import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { PortfolioService } from '../../services/portfolio.service';
import { Education, Certification } from '../../models/portfolio.models';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {
  education: Education[] = [];
  certifications: Certification[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getEducation().subscribe(education => {
      this.education = education;
    });

    this.portfolioService.getCertifications().subscribe(certifications => {
      this.certifications = certifications;
    });
  }

  getEducationIcon(index: number): string {
    const icons = ['school', 'class'];
    return icons[index] || 'school';
  }

  getCertificationIcon(issuer: string): string {
    const icons: { [key: string]: string } = {
      'GeeksforGeeks': 'code',
      'Kaggle': 'analytics',  
      'NPTEL': 'psychology',
      'CCNA': 'router'
    };
    return icons[issuer] || 'verified';
  }
}