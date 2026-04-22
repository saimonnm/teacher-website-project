import { Component, signal } from '@angular/core';
import { LoghiFooter } from '../../models/loghi.model';

@Component({
  selector: 'app-bottom-footer',
  imports: [],
  templateUrl: './bottom-footer.html',
  styleUrl: './bottom-footer.css',
})
export class BottomFooter {
  loghi = signal<LoghiFooter[]>([
    {
      id: 0,
      url: 'https://www.instagram.com/saimonmng/',
      icon: 'assets/images/instagram.png',
      altText: 'Instagram Icon',
    },
    {
      id: 1,
      url: '',
      icon: 'assets/images/twitter.png',
      altText: 'X Icon',
    },
    {
      id: 2,
      url: 'https://www.facebook.com/simona.mangano.39?locale=it_IT',
      icon: 'assets/images/facebook.png',
      altText: 'Facebook Icon',
    },
    {
      id: 3,
      url: 'https://www.linkedin.com/in/simona-mangano/',
      icon: 'assets/images/linkedin.png',
      altText: 'LinkedIn Icon',
    },
  ]);
}
