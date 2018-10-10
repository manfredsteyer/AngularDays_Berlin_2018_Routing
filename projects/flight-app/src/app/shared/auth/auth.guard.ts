import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root' // <-- Global, Wird beim Anwendungsstart geladen
    // providedIn: LazyModule // <-- Wird mit dem Lazy Module geladen
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService) {
    }

    canActivate() {
        if (this.authService.userName === null) {
            
            this.router.navigate(['/home', {needsLogin: true}]);
            return false;
        }
        return true;
    }

}