import { Routes } from '@angular/router';

export const routes: Routes = [
  // Single page application - all components loaded on same route
  { path: '', redirectTo: '#home', pathMatch: 'full' },
  { path: '**', redirectTo: '#home' }
];