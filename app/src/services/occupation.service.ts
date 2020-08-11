import { Injectable } from '@angular/core';
import {Occupation} from './../interfaces/occupation.interface';
@Injectable({
  providedIn: 'root'
})
export class OccupationService {
  private occupations: Occupation[] = [];

  constructor() { }

  getAllJobs(){
    // TODO: get request to get all jobs from microservice
    this.occupations = [
      {
        employer: "Databricks",
        status: "In Progress",
        date: "08/13/2020",
        notes: "Assessment due by 9/14/2020",
        conclusion: "TBD"
      },
      {
        employer: "Wish",
        status: "In Progress",
        date: "08/13/2020",
        notes: "N/A",
        conclusion: "TBD"
      },
      {
        employer: "Microsoft",
        status: "In Progress",
        date: "08/4/2020",
        notes: "N/A",
        conclusion: "TBD"
      },
    ]
    return this.occupations;
  }

  createNewJob(job: Occupation){
    // TODO: post to occuptation microservice
    this.occupations.push(job)
  };
}
