import { Component, inject, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationResourceService } from './core/resources/authentication-resource.service';
import { FooterComponent } from './core/components/footer';
import { HeaderComponent } from './core/components/header';
import { MainComponent } from './core/components/main';

@Component({
    selector: 'bwz-root',
    imports: [RouterOutlet, FooterComponent, HeaderComponent, MainComponent],
    template: `
        <app-header></app-header>
        <router-outlet></router-outlet>
        <app-footer></app-footer>
    `,
    styles: ``,
})
export class App {
    /* example code for login:
  authSvc = inject(AuthenticationResourceService);
  ngOnInit() {
    this.authSvc.login({ login: "bmueller", password: '$user1234'}).subscribe(confirmation => {
      console.log(confirmation);
    });
  }
  */
}
