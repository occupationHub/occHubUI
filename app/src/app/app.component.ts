import { Component } from '@angular/core';
import { JobCreationComponent } from './job-creation/job-creation.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(public modalService: NgbModal){}

  open() {
    const modalRef = this.modalService.open(JobCreationComponent);
  }
}
