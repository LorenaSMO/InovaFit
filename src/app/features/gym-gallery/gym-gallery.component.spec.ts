import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymGalleryComponent } from './gym-gallery.component';

describe('GymGalleryComponent', () => {
  let component: GymGalleryComponent;
  let fixture: ComponentFixture<GymGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
