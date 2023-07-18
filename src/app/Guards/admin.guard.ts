import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthServicesService } from '../services/auth-services.service';
export const adminGuard: CanActivateFn = (route, state) => {
   
 return !inject(AuthServicesService).isLogged();

};
