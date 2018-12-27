import {Menu} from '../../model/menu/Menu';

export const MENUS: Menu[] = [
  {menuId:1,permissionId:1,menuName:'菜单一',parentId:0,orderNum:1,url:'',menuType:'M',visible:true,perms:'',icon:'',enable:true,submenu:[
      {menuId:2,permissionId:1,menuName:'子菜单一',parentId:1,orderNum:1,url:'',menuType:'C',visible:true,perms:'',icon:'',enable:true,submenu:[]},
      {menuId:3,permissionId:1,menuName:'子菜单二',parentId:1,orderNum:1,url:'',menuType:'C',visible:true,perms:'',icon:'',enable:true,submenu:[]},
      {menuId:4,permissionId:1,menuName:'子菜单三',parentId:1,orderNum:1,url:'',menuType:'C',visible:true,perms:'',icon:'',enable:true,submenu:[]}
    ]},
  {menuId:5,permissionId:1,menuName:'菜单二',parentId:0,orderNum:1,url:'',menuType:'M',visible:true,perms:'',icon:'',enable:true,submenu:[
      {menuId:6,permissionId:1,menuName:'子菜单一',parentId:5,orderNum:1,url:'',menuType:'C',visible:true,perms:'',icon:'',enable:true,submenu:[]},
      {menuId:7,permissionId:1,menuName:'子菜单二',parentId:5,orderNum:1,url:'',menuType:'C',visible:true,perms:'',icon:'',enable:true,submenu:[]},
      {menuId:8,permissionId:1,menuName:'子菜单三',parentId:5,orderNum:1,url:'',menuType:'C',visible:true,perms:'',icon:'',enable:true,submenu:[]}
    ]}
]
