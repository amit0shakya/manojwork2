import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WebheaderComponent } from './webheader/webheader.component';
import { WebfooterComponent } from './webfooter/webfooter.component';
import { JobsearchbarComponent } from './jobsearchbar/jobsearchbar.component';
import { AppRouter } from './route';
import { ClientregisterComponent } from './registration/candidate/clientregister.component';
import { FresherregisterationComponent } from './registration/candidate/freshersform/fresherregisteration.component';
import { ExperienceregistrationComponent } from './registration/candidate/professionalform/experienceregistration.component';
import { ReactiveFormsModule }  from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WebheaderComponent,
    WebfooterComponent,
    JobsearchbarComponent,
    ClientregisterComponent,
    FresherregisterationComponent,
    ExperienceregistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
