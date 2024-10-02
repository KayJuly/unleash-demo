import { Routes } from "@angular/router";
import { GuidePageComponent } from "./guide-page/guide-page.component";
import { MemberPortalPageComponent } from "./member-portal-page/member-portal-page.component";
import { RegistrationPageComponent } from "./registration-page/registration-page.component";
import { OrientationPageComponent } from "./orientation-page/orientation-page.component";
import { QuizPageComponent } from "./quiz-page/quiz-page.component";
import {HistoryPageComponent} from "./history-page/history-page.component";

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
    path: "member",
    component: MemberPortalPageComponent,
    data: {
      title: "Member Portal",
      breadcrumb: "Member Portal",
    },
  },
  {
    path: "history",
    component: HistoryPageComponent,
    data: {
      title: "History",
      breadcrumb: "History",
    },
  },
] as Routes;
