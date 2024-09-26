import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-history-page",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./history-page.component.html",
  styleUrl: "./history-page.component.scss",
})
export class HistoryPageComponent {}
