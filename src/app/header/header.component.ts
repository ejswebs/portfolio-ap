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
      this.experienceData = data[0];
    });
    this.getPersonalData.getData().subscribe((data) => {
      console.log(data);
      if (data?.[0]) {
        this.personalData = data[0];
      } else {
        this.getPersonalData.getMock().subscribe((mock) => {
          this.personalData = mock[0];
        });
      }
    });
    //Se consumen datos estáticos en caso de caida de implementación del back
    if (!this.personalData) {
      this.getPersonalData.getMock().subscribe((mock) => {
        this.personalData = mock[0];
      });
    }
    if (!this.experienceData) {
      this.getExperienceData.getMock().subscribe((mock) => {
        this.experienceData = mock[0];
      });
    }
    this.auth = this.authServ.auth;
  }

  btnClick() {
    this.authServ.login(false);
    this.route.navigateByUrl('/login');
  }
}
