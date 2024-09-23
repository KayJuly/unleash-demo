import { Routes } from "@angular/router";
import { GuidePageComponent } from "./guide-page/guide-page.component";
import { GuideMemberPageComponent } from "./guide-member-page/guide-member-page.component";
import { RegistrationPageComponent } from "./registration-page/registration-page.component";
import { OrientationPageComponent } from "./orientation-page/orientation-page.component";
import { QuizPageComponent } from "./quiz-page/quiz-page.component";
import { TrainingListPageComponent } from "./training-page/training-list-page/training-list-page.component";
import { DetailedCoursePageComponent } from "./training-page/detailed-course-page/detailed-course-page.component";

export default [
  {
    path: "guide",
    component: GuidePageComponent,
    data: {
      title: "Guide",
      breadcrumb: "Guide",
    },
  },
  {
    path: "registration",
    component: RegistrationPageComponent,
    data: {
      title: "Registration",
      breadcrumb: "Registration",
    },
  },
  {
    path: "orientation",
    component: OrientationPageComponent,
    data: {
      title: "Orientation",
      breadcrumb: "Orientation",
    },
  },
  {
    path: "quiz",
    component: QuizPageComponent,
    data: {
      title: "Quiz",
      breadcrumb: "Quiz",
    },
  },
  {
    path: "training",
    loadChildren: () =>
      import("./training-page/training.routes").then((m) => m.trainingRoutes),
    data: {
      title: "Training",
      breadcrumb: "Training",
    },
  },
  {
    path: "guide-member",
    component: GuideMemberPageComponent,
    data: {
      title: "Guide",
      breadcrumb: "Guide",
    },
  },
] as Routes;
