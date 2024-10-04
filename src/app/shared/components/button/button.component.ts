import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonText: string = 'Clique aqui';
  @Input() buttonColor: string = '#000';
}
