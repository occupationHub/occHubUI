import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JobCreationModule } from './job-creation/job-creation.module';
import { JobsTableModule } from './jobs-table/jobs-table.module';
import { NavbarModule } from './navbar/navbar.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    JobCreationModule,
    JobsTableModule,
    NavbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }