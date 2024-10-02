import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {SvgIconComponent} from "../../../shared/component/svg-icon/svg-icon.component";
import {FeathericonComponent} from "../../../shared/component/feathericon/feathericon.component";

@Component({
    selector: "app-member-portal-page",
    standalone: true,
    imports: [RouterLink, SvgIconComponent, FeathericonComponent],
    templateUrl: "./member-portal-page.component.html",
    styleUrl: "./member-portal-page.component.scss",
})
export class MemberPortalPageComponent {
}
