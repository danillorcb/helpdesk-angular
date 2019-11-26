import { Observable } from 'rxjs';
import { SharedService } from './../../services/shared.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    public shared: SharedService;

    constructor(private router: Router) {
        this.shared = SharedService.getInstance();
    }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this.shared.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}