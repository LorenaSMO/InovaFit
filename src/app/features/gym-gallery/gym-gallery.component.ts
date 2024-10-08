import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule }from '@angular/material/button';

@Component({
  selector: 'app-gym-gallery',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './gym-gallery.component.html',
  styleUrl: './gym-gallery.component.scss'
})
export class GymGalleryComponent {
  imgObject: string[] = [
    "assets/inovaFit-1.png",
    "assets/inovaFit-2.png",
    "assets/inovaFit-3.png",
    "assets/inovaFit-4.png",
    "assets/inovaFit-5.png",
  ];

  mainImg: number = 0;
  prevImg: number = this.imgObject.length - 1;
  nextImg: number = 1;

  get mainImgUrl(): string {
    return `url(${this.imgObject[this.mainImg]})`;
  }

  get prevImgUrl(): string {
    return `url(${this.imgObject[this.prevImg]})`;
  }

  get nextImgUrl(): string {
    return `url(${this.imgObject[this.nextImg]})`;
  }

  scrollRight(): void {
    this.prevImg = this.mainImg;
    this.mainImg = this.nextImg;

    if (this.nextImg >= this.imgObject.length - 1) {
      this.nextImg = 0;
    } else {
      this.nextImg++;
    }
  }

  scrollLeft(): void {
    this.nextImg = this.mainImg;
    this.mainImg = this.prevImg;

    if (this.prevImg === 0) {
      this.prevImg = this.imgObject.length - 1;
    } else {
      this.prevImg--;
    }
  }
}
