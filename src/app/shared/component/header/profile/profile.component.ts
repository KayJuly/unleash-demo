import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonSvgIconComponent } from '../../common-svg-icon/common-svg-icon.component';
import { FeathericonComponent } from '../../feathericon/feathericon.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: true,
    imports: [CommonSvgIconComponent, RouterLink, FeathericonComponent]
})

export class ProfileComponent {

   public isOpen : boolean = false;

}
