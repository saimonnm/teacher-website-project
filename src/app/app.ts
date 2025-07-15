import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { HeaderNav } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderNav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'teacher-website';
}
