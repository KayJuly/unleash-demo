import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

export interface Menu {
  headTitle1?: string;
  level?: number;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  active?: boolean;
  id?: number;
  bookmark?: boolean;
  children?: Menu[];
  horizontalList?: boolean;
  items?: Menu[];
  data?: Menu[];
}

@Injectable({
  providedIn: "root",
})
export class NavService {
  public isDisplay: boolean;
  public language: boolean = false;
  public isShow: boolean = false;
  public search!: boolean;

  menuItems: Menu[] = [
    {
      // headTitle1: "Pages",
    },
    {
      // level: 1,
      // title: "Pages",
      // icon: "sample-page",
      // type: "sub",
      // active: true,
      // children: [
      //   { path: "/pages/sample-page-1", title: "Sample Page 1", type: "link" },
      //   { path: "/pages/sample-page-2", title: "Sample Page 2", type: "link" },
      // ],
    },
    {
      // level: 1,
      // path: "/sample-page",
      // title: "Sample Page",
      // icon: "sample-page",
      // type: "link",
      // bookmark: true,
    },
  ];

  horizontalMenu: Menu[] = [
    {
      // title: "Pages",
      // children: [
      //   {
      //     id: 1,
      //     level: 1,
      //     title: "Pages",
      //     type: "sub",
      //     children: [
      //       { path: "/pages/sample-page-1", title: "Sample Page 1", type: "link", bookmark: true },
      //       { path: "/pages/sample-page-2", title: "Sample Page 2", type: "link" },
      //     ],
      //   },
      // ]
    },
    {
      //   title: "Sample Page",
      //   level: 1,
      //   path: "/sample-page",
      //   type: "link"
    },
  ];

  item = new BehaviorSubject<Menu[]>(this.menuItems);
  horizontalItem = new BehaviorSubject<Menu[]>(this.horizontalMenu);
}
