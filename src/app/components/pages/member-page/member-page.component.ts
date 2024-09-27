import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-guide-member-page",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./member-page.component.html",
  styleUrl: "./member-page.component.scss",
})
export class MemberPageComponent {}
