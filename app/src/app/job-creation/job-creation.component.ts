import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal,NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
 

@Component({
  selector: 'app-job-creation',
  templateUrl: './job-creation.component.html',
  styleUrls: ['./job-creation.component.sass']
})
export class JobCreationComponent implements OnInit {
  @Input() name;
  public employer:String = "";
  date: NgbDateStruct;
  dateChosen: {year: number, month: number, date:number};

  constructor(public activeModal: NgbActiveModal, private calendar: NgbCalendar) { }

  ngOnInit(): void {
    this.selectToday();
  }
  
  submitNewApplication(){
    console.log("employee: " + this.employer);
    console.log('date: ', this.date);
    this.activeModal.close('bars');
  }
  selectToday() {
    this.date = this.calendar.getToday();
  }
  

}
