import { Injectable } from '@angular/core';
import {Menu} from '../../model/menu/Menu';
import { Observable, of } from 'rxjs';
import {MENUS} from '../../mock/menu/mock-menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenus(): Observable<Menu[]> {
    return of(MENUS);
  }
}
