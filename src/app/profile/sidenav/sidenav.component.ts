import { Component, Input } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  public sidebarnavItems:RouteInfo[]= ROUTES;
  public showMenu:string = '';
@Input() sideNav?:boolean; 
  addExpandClass(element: string) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  sideNavcheck(){
   alert(this.sideNav);
  }

}
