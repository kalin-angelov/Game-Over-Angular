import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserService } from "src/app/user/user.service";

@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {
    constructor(private userService: UserService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): boolean | UrlTree {
            if (this.userService.isLogged) {
                return true; 
            } else {
                return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
            }   
        }
}
        
    
