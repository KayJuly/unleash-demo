import { Component } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
    standalone: true,
    imports: [FormsModule, NgClass]
})

export class ColorPickerComponent {

  public primary: string = "#2B5F60";
  public secondary: string = "#C06240";
  public mixLayout: string = "default";

  public primary_color = localStorage.getItem('primary_color') || '#2B5F60';
  public secondary_color = localStorage.getItem('secondary_color') || '#C06240';

  constructor(public layout: LayoutService) {
    document.documentElement.style.setProperty("--theme-default", localStorage.getItem("primary_color"));
    document.documentElement.style.setProperty("--theme-secondary", localStorage.getItem("secondary_color"));
    var primary = localStorage.getItem("primary_color") || this.layout.config.color.secondary_color;
    var secondary = localStorage.getItem("secondary_color") || this.layout.config.color.secondary_color;
    this.layout.config.color.primary_color = primary;
    this.layout.config.color.secondary_color = secondary;
    localStorage.getItem("primary_color") || this.layout.config.color.primary_color;
    localStorage.getItem("secondary_color") || this.layout.config.color.secondary_color;
  }

  applyColor() {
    localStorage.setItem("primary_color", this.primary_color);
    localStorage.setItem("secondary_color", this.secondary_color);
    this.layout.config.color.primary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
    window.location.reload();
  }

  resetColor() {
    document.documentElement.style.setProperty("--theme-default", "#2B5F60");
    document.documentElement.style.setProperty("--theme-secondary", "#C06240");
    localStorage.setItem("primary_color", "#2B5F60");
    localStorage.setItem("secondary_color", "#C06240");
    window.location.reload();
  }

  customizeMixLayout(val: string) {
    this.mixLayout = val;
    this.layout.config.settings.layout_version = val;
    document.body?.classList.remove("light-only", "dark-sidebar", "dark-only");
    if (val === "default") {
      document.body?.classList.add("light-only");
    } else if (val === "dark-sidebar") {
      document.body?.classList.add("dark-sidebar");
    } else {
      document.body?.classList.add("dark-only");
    }
  }

}
