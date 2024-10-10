import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import {FeathericonComponent} from "../../../shared/component/feathericon/feathericon.component";
import {NgOptimizedImage} from "@angular/common";
import {CommonComponent} from "../common/common.component";
import {ModalService} from '../../../shared/services/modal.service';
import {GuideData} from '../../../shared/services/guide.service';

@Component({
    selector: "app-guide-page",
    standalone: true,
    imports: [RouterLink, NgbAccordionModule, FeathericonComponent, NgOptimizedImage, CommonComponent],
    templateUrl: "./guide-page.component.html",
    styleUrl: "./guide-page.component.scss",
})

export class GuidePageComponent {
    constructor(private modalService: ModalService) {
    }

    openModal(content: any) {
        this.modalService.openModal(content);
    }

    public GuideData = GuideData;

}

