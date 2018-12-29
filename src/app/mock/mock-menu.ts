import {Menu} from '../model/menu';
import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryMenuService implements InMemoryDbService {
  createDb() {
    const menus: Menu[] = [
      {
        menuId: 1,
        permissionId: 1,
        menuName: '系统管理',
        parentId: 0,
        orderNum: 1,
        url: '',
        menuType: 'M',
        visible: true,
        perms: '',
        icon: '',
        enable: true,
        submenu: [
          {
            menuId: 2,
            permissionId: 1,
            menuName: '子菜单一',
            parentId: 1,
            orderNum: 1,
            url: '',
            menuType: 'C',
            visible: true,
            perms: '',
            icon: '',
            enable: true,
            submenu: []
          },
          {
            menuId: 3,
            permissionId: 1,
            menuName: '子菜单二',
            parentId: 1,
            orderNum: 1,
            url: '',
            menuType: 'C',
            visible: true,
            perms: '',
            icon: '',
            enable: true,
            submenu: []
          },
          {
            menuId: 4,
            permissionId: 1,
            menuName: '子菜单三',
            parentId: 1,
            orderNum: 1,
            url: '',
            menuType: 'C',
            visible: true,
            perms: '',
            icon: '',
            enable: true,
            submenu: []
          },
        ]},
      {
        menuId: 5,
        permissionId: 1,
        menuName: '系统监控',
        parentId: 0,
        orderNum: 1,
        url: '',
        menuType: 'M',
        visible: true,
        perms: '',
        icon: '',
        enable: true,
        submenu: [
          {
            menuId: 6,
            permissionId: 1,
            menuName: '子菜单一',
            parentId: 5,
            orderNum: 1,
            url: '',
            menuType: 'C',
            visible: true,
            perms: '',
            icon: '',
            enable: true,
            submenu: []
          },
          {
            menuId: 7,
            permissionId: 1,
            menuName: '子菜单二',
            parentId: 5,
            orderNum: 1,
            url: '',
            menuType: 'C',
            visible: true,
            perms: '',
            icon: '',
            enable: true,
            submenu: []
          },
          {
            menuId: 8,
            permissionId: 1,
            menuName: '子菜单三',
            parentId: 5,
            orderNum: 1,
            url: '',
            menuType: 'C',
            visible: true,
            perms: '',
            icon: '',
            enable: true,
            submenu: []
          }
        ]
      },
      {
        menuId: 9,
        permissionId: 1,
        menuName: '系统工具',
        parentId: 0,
        orderNum: 1,
        url: '',
        menuType: 'M',
        visible: true,
        perms: '',
        icon: '',
        enable: true,
        submenu: [
          {
            menuId: 10,
            permissionId: 1,
            menuName: '子菜单一',
            parentId: 5,
            orderNum: 1,
            url: '',
            menuType: 'C',
            visible: true,
            perms: '',
            icon: '',
            enable: true,
            submenu: []
          },
          {
            menuId: 11,
            permissionId: 1,
            menuName: '子菜单二',
            parentId: 5,
            orderNum: 1,
            url: '',
            menuType: 'C',
            visible: true,
            perms: '',
            icon: '',
            enable: true,
            submenu: []
          },
          {
            menuId: 12,
            permissionId: 1,
            menuName: '子菜单三',
            parentId: 5,
            orderNum: 1,
            url: '',
            menuType: 'C',
            visible: true,
            perms: '',
            icon: '',
            enable: true,
            submenu: []
          }
        ]
      },
      {
        menuId: 13,
        permissionId: 1,
        menuName: '权限管理',
        parentId: 0,
        orderNum: 1,
        url: '',
        menuType: 'M',
        visible: true,
        perms: '',
        icon: '',
        enable: true,
        submenu: [
          {
            menuId: 14,
            permissionId: 1,
            menuName: '子菜单一',
            parentId: 5,
            orderNum: 1,
            url: '',
            menuType: 'C',
            visible: true,
            perms: '',
            icon: '',
            enable: true,
            submenu: []
          },
          {
            menuId: 15,
            permissionId: 1,
            menuName: '子菜单二',
            parentId: 5,
            orderNum: 1,
            url: '',
            menuType: 'C',
            visible: true,
            perms: '',
            icon: '',
            enable: true,
            submenu: []
          },
          {
            menuId: 16,
            permissionId: 1,
            menuName: '子菜单三',
            parentId: 5,
            orderNum: 1,
            url: '',
            menuType: 'C',
            visible: true,
            perms: '',
            icon: '',
            enable: true,
            submenu: []
          }
        ]
      }
    ];
    return {getMenus: menus};
  }
}

