import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienceDataService } from '../services/experience-data.service';
import { LoginService } from '../services/login.service';
import { PersonalDataService } from '../services/personal-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  personalData: any;
  experienceData: any;
  auth: Boolean = false;
  constructor(
    private getPersonalData: PersonalDataService,
    private getExperienceData: ExperienceDataService,
    private route: Router,
    private authServ: LoginService
  ) {}

  ngOnInit(): void {
    this.getExperienceData.getData().subscribe((data) => {
      console.log('data', data[0]);
      this.experienceData = data[0];
    });
    this.getPersonalData.getData().subscribe((data) => {
      console.log('data', data);
      this.personalData = data[0];
    });
    this.auth = this.authServ.auth;
  }

  onLogout() {
    console.log('se dispara onLogout');
    this.route.navigate(['/login']);
  }

  btnClick() {
    this.authServ.login(false);
    this.route.navigateByUrl('/login');
  }
}
