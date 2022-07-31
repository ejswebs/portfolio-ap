import { Component, OnInit } from '@angular/core';
import { ExperienceDataService } from '../services/experience-data.service';
import { InstitutionDataService } from '../services/institution-data.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent implements OnInit {
  experienceData: any;
  instData: any;
  auth: Boolean = false;
  constructor(
    private getExperienceData: ExperienceDataService,
    private getInstitutionData: InstitutionDataService,
    private authServ: LoginService
  ) {}

  ngOnInit(): void {
    this.getExperienceData.getData().subscribe((data) => {
      console.log('exp', data);
      this.experienceData = data;
    });
    this.getInstitutionData.getData().subscribe((data) => {
      console.log('instData', data);
      this.instData = data;
    });
    this.auth = this.authServ.auth;
  }
}
