//FASE 4  codice per definire il componente HomeComponent:

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    <button routerLink="/active-posts">Post Attivi</button>
    <button routerLink="/inactive-posts">Post Inattivi</button>
  `
})
export class HomeComponent { }

