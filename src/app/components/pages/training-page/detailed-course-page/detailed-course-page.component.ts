import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {FeathericonComponent} from "../../../../shared/component/feathericon/feathericon.component";
import {CommonComponent} from "../../common/common.component";
import {ModalService} from '../../../../shared/services/modal.service';

@Component({
    selector: "app-detailed-course-page",
    standalone: true,
    imports: [RouterLink, FeathericonComponent],
    templateUrl: "./detailed-course-page.component.html",
    styleUrl: "./detailed-course-page.component.scss",
})
export class DetailedCoursePageComponent {
    latitude: number = -36.85248871196826;
    longitude: number = 174.77003145479162;

    constructor(private modalService: ModalService) {
    }

    openModal(content: any) {
        this.modalService.openModal(content);
    }

    get googleMapsUrl(): string {
        return `https://www.google.com/maps?q=${this.latitude},${this.longitude}`;
    }
}
