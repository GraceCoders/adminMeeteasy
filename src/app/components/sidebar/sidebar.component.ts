import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    level:any;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '',level:0 },
    { path: '/users', title: 'Users',  icon: 'users_circle-08', class: '',level:0 },
    { path: '/businesslist', title: 'Business List',  icon: 'business_badge', class: '',level:0 },
    {path: '/Categories',title:'Catagories',icon:'design_bullet-list-67',class:'',level:0},
    { path: '/Vanues', title: 'Vanues',  icon: 'business_bank', class: '' ,level:0},
    { path: '/Capacity', title: 'Capacity',  icon: 'design_app', class: '' ,level:1},
    { path: '/Cuisinetype', title: 'Cuisine type',  icon: 'users_circle-08', class: '' ,level:1},
    { path: '/Priceperhead', title: 'Price per head',  icon: 'business_badge', class: '' ,level:1},
    { path: '/Vibe', title: 'Vibe',  icon: 'design_app', class: '',level:1 },
    { path: '/Features', title: 'Features',  icon: 'users_circle-08', class: '',level:1 },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isToggle = true;
  sideClass = ''
  width = 260;
  menuItems: any[];
  subMenuItems: any[];
  username;
  subMenuVisible:boolean = false;
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem.level == 0);
    this.subMenuItems = ROUTES.filter(menuItem => menuItem.level == 1);
    this.username = localStorage.getItem('username');
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
  
  openNav(){
  console.log("ndaubuhdubauduashu")
  this.isToggle = this.isToggle == true ? this.isToggle = false : this.isToggle = true;
  this.width = this.width == 260 ? this.width = 0 : this.width = 260; 
  this.sideClass = this.sideClass == '' ? this.sideClass = 'sidebarClass' : this.sideClass = '';
  document.getElementById("mySidepanel").style.width = `${this.width}px`;
  }
  
}
