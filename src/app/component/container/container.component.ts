import {Component, OnInit} from '@angular/core';
import {Menu} from '../../model/menu';
import {MenuService} from '../../service/menu/menu.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  menus: Menu[];

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.getMenus();
  }

  getMenus(): void {
    this.menuService.getMenus()
      .subscribe(menus => this.menus = menus);
  }
}
