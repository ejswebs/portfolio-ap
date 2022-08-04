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
      this.experienceData = data;
    });
    this.getInstitutionData.getData().subscribe((data) => {
      this.instData = data;
    });
    //Se consumen datos estáticos en caso de caida de implementación del back
    if (!this.instData) {
      this.getInstitutionData.getMock().subscribe((mock) => {
        this.instData = mock;
      });
    }
    if (!this.experienceData) {
      this.getExperienceData.getMock().subscribe((mock) => {
        this.experienceData = mock;
      });
    }
    this.auth = this.authServ.auth;
  }
}
