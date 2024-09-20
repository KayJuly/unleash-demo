import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-booking-page",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./booking-page.component.html",
  styleUrl: "./booking-page.component.scss",
})
export class BookingPageComponent {}
