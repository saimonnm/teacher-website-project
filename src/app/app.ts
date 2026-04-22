import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomFooter } from './components/bottom-footer/bottom-footer';
import { HeaderNav } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderNav, BottomFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'teacher-website';
}
