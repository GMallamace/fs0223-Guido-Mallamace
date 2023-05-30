//codice per definire il componente NavbarComponent:

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/active-posts">Post Attivi</a>
      <a routerLink="/inactive-posts">Post Inattivi</a>
    </nav>
  `,
  styles: [
    `
    nav {
      background-color: #f2f2f2;
      padding: 10px;
    }

    a {
      margin-right: 10px;
      text-decoration: none;
    }
    `
  ]
})
export class NavbarComponent { }
