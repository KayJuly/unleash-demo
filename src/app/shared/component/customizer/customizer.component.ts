import { Component, HostListener, TemplateRef } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { QuickOptionComponent } from './quick-option/quick-option.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-customizer',
    templateUrl: './customizer.component.html',
    styleUrls: ['./customizer.component.scss'],
    standalone: true,
    imports: [NgClass, QuickOptionComponent, ColorPickerComponent]
})
export class CustomizerComponent {


  public customizer: string = '';
  public sidebarType: string = 'compact-wrapper';
  public sidebarSetting: string = "default-sidebar";
  public screenWidth: number = window.innerWidth;
  public layoutType: string = 'ltr';

  public primary_color: string = '#2B5F60';
  public secondary_color: string = '#C06240';


  constructor(private modalService: NgbModal, public layoutService: LayoutService) { }

  @HostListener("window:resize", ["$event"])

  onResize(event: { target: { innerWidth: number }; }) {
    this.screenWidth = event.target.innerWidth;
  }


  openModal(popup: TemplateRef<NgbModal>) {
    this.modalService.open(popup, { backdropClass: 'dark-modal', centered: true });
  }


  applyColor() {
    document.documentElement.style.setProperty('--theme-default', this.primary_color);
    document.documentElement.style.setProperty('--theme-secondary', this.secondary_color);
    this.layoutService.config.color.primary_color = this.primary_color;
    this.layoutService.config.color.secondary_color = this.secondary_color;
  }


  customizeSidebarType(val: string) {
    this.sidebarType = val;
  }

  copyText(data: any) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox)
  }


}
