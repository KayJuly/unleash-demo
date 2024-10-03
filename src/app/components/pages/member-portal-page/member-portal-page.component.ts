import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {SvgIconComponent} from "../../../shared/component/svg-icon/svg-icon.component";
import {FeathericonComponent} from "../../../shared/component/feathericon/feathericon.component";
import {CommonComponent} from "../common/common.component";
import {ModalService} from '../../../shared/services/modal.service';

@Component({
    selector: "app-member-portal-page",
    standalone: true,
    imports: [RouterLink, SvgIconComponent, FeathericonComponent],
    templateUrl: "./member-portal-page.component.html",
    styleUrl: "./member-portal-page.component.scss",
})
export class MemberPortalPageComponent {
    constructor(private modalService: ModalService) {
    }

    openModal(content: any) {
        this.modalService.openModal(content);
    }

}
