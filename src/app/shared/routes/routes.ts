import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "users",
    data: {
      breadcrumb: "Users",
    },
    loadChildren: () => import("../../components/users/users.routes"),
  },
  {
    path: "admin",
    data: {
      breadcrumb: "Admin",
    },
    loadChildren: () => import("../../components/admin/admin.routes"),
  },
];
