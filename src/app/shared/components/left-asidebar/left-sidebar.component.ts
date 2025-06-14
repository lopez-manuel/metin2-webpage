import { Component } from '@angular/core';
import { AsideListComponent } from "../aside-list/aside-list.component";

@Component({
  selector: 'app-left-sidebar',
  imports: [AsideListComponent],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {

}
