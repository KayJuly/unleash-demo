import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-guide-page",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./guide-page.component.html",
  styleUrl: "./guide-page.component.scss",
})
export class GuidePageComponent {}
