import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-quiz-page",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./quiz-page.component.html",
  styleUrl: "./quiz-page.component.scss",
})
export class QuizPageComponent {}
