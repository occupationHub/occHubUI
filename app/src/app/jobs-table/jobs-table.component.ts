import { Component, OnInit } from '@angular/core';
import { Occupation } from './../../interfaces/occupation.interface';
import { OccupationService } from '../../services/occupation.service';

@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.sass']
})
export class JobsTableComponent implements OnInit {

  public occupations: Occupation[] = [];

  constructor(private occupationService: OccupationService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(){
    this.occupations = this.occupationService.getAllJobs();
  }

}
