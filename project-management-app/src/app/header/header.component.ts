import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Project Management app';

  turnToEng(): void {console.log('EN')}
  turnToRus(): void {console.log('RU')}
}
