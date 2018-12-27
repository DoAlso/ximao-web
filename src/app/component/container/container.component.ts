import { Component, OnInit } from '@angular/core';
import {Menu} from '../../model/menu/Menu';
import {MenuService} from '../../service/menu/menu.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  menus: Menu[];
  currentNav:string;
  currentMenu:string;
  currentSubMenu:string;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus():void {
    this.menuService.getMenus()
      .subscribe(menus =>this.menus = menus);
  }

  getCurrentNav(nav:string):void{
    this.currentNav = nav;
  }

  getCurrentMenu(menu:string):void{
    this.currentMenu = menu;
  }

  getCurrentSubMenu(subMenu:string):void{
    this.currentSubMenu = subMenu;
  }
}
