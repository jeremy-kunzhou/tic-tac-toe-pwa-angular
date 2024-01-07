import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from './square/square.component'
import { BoardComponent } from './board/board.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SquareComponent, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'title', content: 'Tic Tac Toe - PWA By Angular' },
      { name: 'description', content: 'Tic Tac Toe Game powered by Angular Pwa' },
      { name: 'keywords', content: 'tic-tac-toe, game, angular, pwa' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'English' },
    ]);
    this.setTitle('Tic Tac Toe - PWA By Angular');
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
  ngOnInit() {
  }

}
