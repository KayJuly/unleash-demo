import { Routes } from "@angular/router";

export const fullRoutes: Routes = [
  {
    path: "coming-soon",
    loadChildren: () =>
      import("../../components/utility/coming-soon/coming-soon.routes").then(
        (m) => m.default
      ),
  },
];
