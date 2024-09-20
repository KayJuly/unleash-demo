import { Routes } from "@angular/router";
import { ContentComponent } from "./shared/component/layout/content/content.component";
import { content } from "./shared/routes/routes";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/users/guide",
    pathMatch: "full",
  },
  {
    path: "",
    component: ContentComponent,
    children: content,
  },
  {
    path: "**",
    redirectTo: "",
  },
];
