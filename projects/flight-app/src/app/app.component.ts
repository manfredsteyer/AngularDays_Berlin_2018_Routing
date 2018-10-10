import { authConfig } from './auth.config';
import { AuthService } from './shared/auth/auth.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import {Component} from '@angular/core';
import { filter, debounce, debounceTime } from 'rxjs/operators';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigating: boolean = false;
  constructor(
    private oauthService: OAuthService,
    private router: Router) { 

    router.events.pipe(
      filter(e => e instanceof NavigationStart || e instanceof NavigationEnd),
      debounceTime(1000),
      filter(e => e instanceof NavigationStart),
    ).subscribe(e => {
      this.navigating = true;
    });

    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      this.navigating = false;
    });

  }

  ngOnInit() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

  }
}

