import { Routes } from "@angular/router";
import { TrainingListPageComponent } from "./training-list-page/training-list-page.component";
import { DetailedCoursePageComponent } from "./detailed-course-page/detailed-course-page.component";

export const trainingRoutes: Routes = [
  {
    path: "",
    component: TrainingListPageComponent,
  },
  {
    path: "course",
    component: DetailedCoursePageComponent,
  },
  // {
  //   path: "course/:id",
  //   component: DetailedCoursePageComponent,
  // },
];
