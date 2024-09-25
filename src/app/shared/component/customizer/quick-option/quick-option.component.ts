import { Component, HostListener } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-quick-option',
    templateUrl: './quick-option.component.html',
    styleUrls: ['./quick-option.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class QuickOptionComponent {

  public layoutType: string = 'ltr';
  public sidebarType: string = 'compact-wrapper';
  public screenWidth = window.innerWidth;
  public icon: string = "fill-svg";

  constructor(public layout: LayoutService) { }

  customizeLayoutType(val: string) {
    this.layoutType = val;
    this.layout.config.settings.layout_type = val;
    if (val == 'rtl') {
      document.getElementsByTagName('html')[0].setAttribute('dir', val);
      document.body.className = 'rtl';
    } else if (val == 'box-layout') {
      document.getElementsByTagName('html')[0].setAttribute('dir', val);
      document.body.className = 'box-layout';
    } else {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
      document.body.className = '';
    }
  }

  customizeSidebarType(val: string) {
    if (this.screenWidth < 1200) {
      if (val == 'horizontal-wrapper') {
        this.layout.config.settings.sidebar_type = 'compact-wrapper'
      }
    } else {
      this.layout.margin = 0;
      this.sidebarType = val;
      this.layout.config.settings.sidebar_type = val;
      this.layout.customizer = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  svgIcon(val: string) {
    this.icon = val;
    this.layout.config.settings.icon = val;
    if (val == "fill-svg") {
      document.getElementsByTagName("page-sub-header")[0]?.setAttribute("icon", val);
    } else {
      document.getElementsByTagName("page-sub-header")[0]?.setAttribute("icon", val);
    }
  }

}
