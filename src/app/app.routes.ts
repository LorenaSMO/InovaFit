import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ServicesComponent } from './features/services/services.component';
import { PricingPlansComponent } from './features/pricing-plans/pricing-plans.component';
import { GymGalleryComponent } from './features/gym-gallery/gym-gallery.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'pricing-plans', component: PricingPlansComponent },
  { path: 'gym-gallery', component: GymGalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
