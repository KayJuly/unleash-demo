import { Routes } from "@angular/router";
import { SamplePageComponent } from "../../components/simple-page/sample-page/sample-page.component";
import { GuidePageComponent } from "../../components/users/guide-page/guide-page.component";
import { RegistrationPageComponent } from "../../components/users/registration-page/registration-page.component";

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
