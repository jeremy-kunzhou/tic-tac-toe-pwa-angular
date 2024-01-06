import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-square',
  template: `
    <button onclick="onClick()">{{ value ?? '' }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;

  
}
