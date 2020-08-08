import { Component, OnInit } from '@angular/core';
import { occupation } from './../../interfaces/occupation.interface';

@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.sass']
})
export class JobsTableComponent implements OnInit {

  public employer: String = "Databricks";
  public status: String = "In Progress";
  public date: String = "08/13/2020";
  public notes: String = "Assessment due by 9/14/2020";
  public conclusion: String = "TBD";

  occupations: occupation[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
