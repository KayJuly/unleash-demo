import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import {FeathericonComponent} from "../../../shared/component/feathericon/feathericon.component";
import {NgOptimizedImage} from "@angular/common";
import {CommonComponent} from "../common/common.component";
import {ModalService} from '../../../shared/services/modal.service';

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

export const GuideData = [
    {
        panel: 'First',
        step: '1',
        title: 'Member Registration',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /><br /><br /> ',
        class: 'collapse show'
    },
    {
        panel: 'Second',
        step: '2',
        title: 'Orientation',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /><br /><br /> ',
        class: 'collapse show'
    },
    {
        panel: 'Third',
        step: '3',
        title: 'Quiz',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /><br /><br /> ',
        class: 'collapse show'
    },
    {
        panel: 'Four',
        step: '4',
        title: 'Booking',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br /><br /><br />',
        class: 'collapse show'
    },
    {
        panel: 'Five',
        step: '5',
        title: 'Training',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br /><br /><br />',
        class: 'collapse show'
    },
    {
        panel: 'Six',
        step: '6',
        title: 'Feedback',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /><br /><br /> ',
        class: 'collapse show'
    },
];

