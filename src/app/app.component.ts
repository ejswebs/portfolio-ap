import { Component } from '@angular/core';
import { PersonalDataService } from './services/personal-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonalDataService],
})
export class AppComponent {
  title = 'ENZO STEIER';
  constructor(private dataService: PersonalDataService) {}
  ngOnInit() {}
}
