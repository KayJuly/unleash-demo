import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "users",
    data: {
      breadcrumb: "Users",
    },
    loadChildren: () => import("../../components/pages/users.routes"),
  },
];
