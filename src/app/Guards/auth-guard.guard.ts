import { ActivatedRouteSnapshot, CanActivateFn,Router, RouterStateSnapshot } from '@angular/router';
import { AuthServicesService } from '../services/auth-services.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {

  if(inject(AuthServicesService).isLogged()){
    return true;
  }else{
    inject(Router).navigate(["/admin"]);
    return false;
  }
 
      
};
