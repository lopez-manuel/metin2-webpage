import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { AsideListComponent } from "./shared/components/aside-list/aside-list.component";
import { MainLayoutComponent } from "./shared/layouts/main-layout/main-layout.component";

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mt2-web';
}
