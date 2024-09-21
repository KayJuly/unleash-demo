import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-training-list-page",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./training-list-page.component.html",
  styleUrl: "./training-list-page.component.scss",
})
export class TrainingListPageComponent {}
