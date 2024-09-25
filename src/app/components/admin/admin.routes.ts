import { Routes } from "@angular/router";
import { GuidePageComponent } from "./guide-page/guide-page.component";

export default [
  {
    path: "guide",
    component: GuidePageComponent,
    data: {
      title: "Guide",
      breadcrumb: "Guide",
    },
  },
] as Routes;
