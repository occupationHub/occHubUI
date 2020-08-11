import {NgModule } from '@angular/core'
import {CommonModule} from '@angular/common';
import { JobCreationComponent } from './job-creation.component';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        JobCreationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule
    ],
    exports:[
        JobCreationComponent
    ]
})

export class JobCreationModule{}