import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {FeathericonComponent} from "../../../shared/component/feathericon/feathericon.component";
import {CommonComponent} from "../common/common.component";
import {ModalService} from '../../../shared/services/modal.service';

@Component({
    selector: "app-quiz-page",
    standalone: true,
    imports: [RouterLink, FeathericonComponent],
    templateUrl: "./quiz-page.component.html",
    styleUrl: "./quiz-page.component.scss",
})
export class QuizPageComponent {
    constructor(private modalService: ModalService) {
    }

    openModal(content: any) {
        this.modalService.openModal(content);
    }

}
