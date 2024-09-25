import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-training-list-page",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./training-list-page.component.html",
  styleUrl: "./training-list-page.component.scss",
})
export class TrainingListPageComponent {
  latitude: number = -36.85248871196826;
  longitude: number = 174.77003145479162;

  get googleMapsUrl(): string {
    return `https://www.google.com/maps?q=${this.latitude},${this.longitude}`;
  }
}
