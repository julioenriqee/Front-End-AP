import { Component } from '@angular/core';
import { LogoAPComponent } from "../logo-ap/logo-ap.component"
import { BannerComponent } from "../banner/banner.component"


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoAPComponent, BannerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
