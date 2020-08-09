import {NgModule } from '@angular/core'
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobsTableComponent} from './jobs-table.component';

@NgModule({
    declarations: [
        JobsTableComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports:[
        JobsTableComponent
    ]
})

export class JobsTableModule{}