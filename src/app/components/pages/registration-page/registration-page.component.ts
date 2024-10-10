import {Component, OnInit} from "@angular/core";
import {RouterLink} from "@angular/router";
import {FeathericonComponent} from "../../../shared/component/feathericon/feathericon.component";
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalService} from '../../../shared/services/modal.service';
import {AlertComponent} from '../common/alertComponent';

@Component({
    selector: "app-registration-page",
    standalone: true,
    imports: [RouterLink, FeathericonComponent, CommonModule, ReactiveFormsModule, AlertComponent],
    templateUrl: "./registration-page.component.html",
    styleUrl: "./registration-page.component.scss",
})
export class RegistrationPageComponent implements OnInit {
    registrationForm: FormGroup;
    isRegistered: boolean = false;
    alertMessage: string = '';
    alertType: 'success' | 'danger' = 'success';
    showAlert: boolean = false;

    constructor(private fb: FormBuilder, private modalService: ModalService) {
    }

    ngOnInit() {
        this.registrationForm = this.fb.group({
            name: ['Kay Shoji', Validators.required],
            email: ['kay.shoji@aucklanduni.com', [Validators.required, Validators.email]],
            phone: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
            address: [''],
            city: [''],
            postalCode: [''],
            fieldString: [''],
            fieldNumber: [null, Validators.pattern(/^\d+$/)],
            fieldDropdown: [''],
            fieldTextarea: ['']
        });
    }

    onRegister() {
        if (this.registrationForm.valid) {
            console.log('Registration form submitted:', this.registrationForm.value);
            this.isRegistered = true;
            this.showSuccessAlert('Registration completed successfully! You can now proceed to the next step.');
        } else {
            this.showErrorAlert('Please fill in all required fields correctly.');
        }
    }

    showSuccessAlert(message: string) {
        this.alertMessage = message;
        this.alertType = 'success';
        this.showAlert = true;
    }

    showErrorAlert(message: string) {
        this.alertMessage = message;
        this.alertType = 'danger';
        this.showAlert = true;
    }

    get f() {
        return this.registrationForm.controls;
    }

    openModal(content: any) {
        this.modalService.openModal(content);
    }

}