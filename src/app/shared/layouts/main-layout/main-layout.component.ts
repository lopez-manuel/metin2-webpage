import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { BackgroundComponent } from '../../components/background/background.component';
import { LeftSidebarComponent } from "../../components/left-asidebar/left-sidebar.component";
import { RouterOutlet } from '@angular/router';
import { RightSidebarComponent } from "../../components/right-sidebar/right-sidebar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-main-layout',
  imports: [NavbarComponent, BackgroundComponent, LeftSidebarComponent, RouterOutlet, RightSidebarComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
