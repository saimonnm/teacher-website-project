import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '../../models/navbar.model';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class HeaderNav {
  navbarItems = signal<Navbar[]>([
    {
      id: 0,
      label: 'Home',
      routerLink: 'home',
      icon: './assets/images/teacher.png',
    },
    {
      id: 1,
      label: 'Cosa offro',
      routerLink: '',
    },
    {
      id: 2,
      label: 'Chi sono',
      routerLink: 'who-i-am',
    },
    {
      id: 3,
      label: 'Contatti',
      routerLink: '',
    },
  ]);
}
