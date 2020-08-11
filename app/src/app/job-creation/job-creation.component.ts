import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal,NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { OccupationService } from '../../services/occupation.service';
import { Occupation } from '../../interfaces/occupation.interface';
 

@Component({
  selector: 'app-job-creation',
  templateUrl: './job-creation.component.html',
  styleUrls: ['./job-creation.component.sass']
})
export class JobCreationComponent implements OnInit {
  @Input() name;
  public employer:String = "";
  public date: NgbDateStruct;
  public note: String ="";
  public notes: String[] = [];
  dateChosen: {year: number, month: number, date:number};

  constructor(
    public activeModal: NgbActiveModal,
    private calendar: NgbCalendar,
    private occupationService: OccupationService
  ) { }

  ngOnInit(): void {
    this.selectToday();
  }
  
  submitNewApplication(){
    const formattedDate = this.date.month + "/" + this.date.day + "/" + this.date.year;
    this.notes.push(this.note);
    console.log(formattedDate);
    const newJob: Occupation = {
      employer: this.employer,
      status: 'In Progress',
      date: formattedDate,
      notes: this.notes,
      conclusion: "TBD"
    }
    console.log(newJob);
    this.occupationService.createNewJob(newJob);
    this.activeModal.close('bars');
  }
  selectToday() {
    this.date = this.calendar.getToday();
  }


  

}
