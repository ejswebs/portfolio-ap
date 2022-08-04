import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { HabilitiesDataService } from '../services/hability-data.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skillsData: any;
  mode: ProgressSpinnerMode = 'determinate';
  color = 'red';
  value = 50;
  auth: Boolean = false;

  constructor(
    private getHabilitiesData: HabilitiesDataService,
    private authServ: LoginService
  ) {}

  ngOnInit(): void {
    this.getHabilitiesData.getData().subscribe((data) => {
      this.skillsData = data;
    });
    //Se consumen datos estáticos en caso de caida de implementación del back
    if (!this.skillsData) {
      this.getHabilitiesData.getMock().subscribe((mock) => {
        this.skillsData = mock;
      });
    }
    this.auth = this.authServ.auth;
  }
}
