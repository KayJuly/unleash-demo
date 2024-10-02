import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import {FeathericonComponent} from "../../../shared/component/feathericon/feathericon.component";

@Component({
  selector: "app-history-page",
  standalone: true,
    imports: [RouterLink, FeathericonComponent],
  templateUrl: "./history-page.component.html",
  styleUrl: "./history-page.component.scss",
})
export class HistoryPageComponent {}
