import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-alert',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div *ngIf="show" class="alert" [ngClass]="'alert-' + type" role="alert">
      {{ message }}
    </div>
  `,
    styles: [`
    .alert {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1050;
      padding: 15px;
      border-radius: 4px;
      opacity: 0.9;
    }
    .alert-success {
      background-color: #d4edda;
      border-color: #c3e6cb;
      color: #155724;
    }
    .alert-danger {
      background-color: #f8d7da;
      border-color: #f5c6cb;
      color: #721c24;
    }
  `]
})
export class AlertComponent implements OnInit {
    @Input() message: string = '';
    @Input() type: 'success' | 'danger' = 'success';
    @Input() duration: number = 3000;
    show: boolean = false;

    ngOnInit() {
        this.show = true;
        setTimeout(() => this.show = false, this.duration);
    }
}