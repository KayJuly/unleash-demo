import { Routes } from "@angular/router";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";

export default [
  {
    path: "dashboard",
    component: DashboardPageComponent,
    data: {
      title: "Dashboard",
      breadcrumb: "Dashboard",
    },
  },
] as Routes;
