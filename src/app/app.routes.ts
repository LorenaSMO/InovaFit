import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricingPlansComponent } from './pages/pricing-plans/pricing-plans.component';
import { GymGalleryComponent } from './pages/gym-gallery/gym-gallery.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'pricing-plans', component: PricingPlansComponent },
  { path: 'gym-gallery', component: GymGalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
