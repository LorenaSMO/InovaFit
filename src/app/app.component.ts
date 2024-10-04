import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { ServicesComponent } from './features/services/services.component';
import { PricingPlansComponent } from './features/pricing-plans/pricing-plans.component';
import { ContactComponent } from './features/contact/contact.component';
import { GymGalleryComponent } from './features/gym-gallery/gym-gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    PricingPlansComponent,
    ContactComponent,
    GymGalleryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'inovafit';
}
