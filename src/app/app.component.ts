import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { ServicesComponent } from "./pages/services/services.component";
import { PricingPlansComponent } from "./pages/pricing-plans/pricing-plans.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { GymGalleryComponent } from "./pages/gym-gallery/gym-gallery.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, HomeComponent, ServicesComponent, PricingPlansComponent, ContactComponent, GymGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inovafit';
}
