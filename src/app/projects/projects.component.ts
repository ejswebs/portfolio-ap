import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ProjectDataService } from '../services/project-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectData: any;
  auth: Boolean = false;
  constructor(
    private getProjectData: ProjectDataService,
    private authServ: LoginService
  ) {}

  ngOnInit(): void {
    this.getProjectData.getData().subscribe((data) => {
      console.log('projectData', data);
      this.projectData = data;
    });
    this.auth = this.authServ.auth;
  }
}
