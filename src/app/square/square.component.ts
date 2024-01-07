import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
@Component({
  imports: [MatButtonModule, CommonModule],
  standalone: true,
  selector: 'app-square',
  template: `
    <button mat-raised-button *ngIf="!value" disabled="true" style="cursor: pointer !important;" aria-label="empty-button">{{ value ?? '' }}</button>
    <button mat-raised-button *ngIf="value==='X'" color="primary" aria-label="X-button">{{ 'X' }}</button>
    <button mat-raised-button *ngIf="value==='O'" color="accent" aria-label="O-button">{{ 'O' }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
