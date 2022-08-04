import { Component, OnInit } from '@angular/core';
import { AcademicDataService } from '../services/academic-data.service';
import { InstitutionDataService } from '../services/institution-data.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css'],
})
export class AcademicComponent implements OnInit {
  academicData: any;
  instData: any;
  auth: Boolean = false;
  constructor(
    private getAcademyData: AcademicDataService,
    private getInstitutionData: InstitutionDataService,
    private authServ: LoginService
  ) {}

  ngOnInit(): void {
    this.getAcademyData.getData().subscribe((data) => {
      this.academicData = data;
    });
    this.getInstitutionData.getData().subscribe((data) => {
      this.instData = data;
    });
    //Se consumen datos estáticos en caso de caida de implementación del back
    if (!this.academicData) {
      this.getAcademyData.getMock().subscribe((mock) => {
        this.academicData = mock;
      });
    }
    if (!this.instData) {
      this.getInstitutionData.getMock().subscribe((mock) => {
        this.instData = mock;
      });
    }
    this.auth = this.authServ.auth;
  }
}
