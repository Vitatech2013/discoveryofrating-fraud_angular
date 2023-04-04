import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../ADMIN/Admin-services/api.service';
import { UserApiService } from '../USER/user-services/user-api.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private guard:UserApiService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if (this.guard.isLoggedin()) {
        return true;
      } else {
        alert('You are not logged in');
        this.router.navigate(['/user-login']);
        return false;
      }

    }
    
  }
  
