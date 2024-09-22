import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-detailed-course-page",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./detailed-course-page.component.html",
  styleUrl: "./detailed-course-page.component.scss",
})
export class DetailedCoursePageComponent {
  latitude: number = -36.85248871196826;
  longitude: number = 174.77003145479162;

  get googleMapsUrl(): string {
    return `https://www.google.com/maps?q=${this.latitude},${this.longitude}`;
  }
}
