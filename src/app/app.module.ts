import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackedEntityListComponent } from './tracked-entity-list/tracked-entity-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbar } from '@angular/material/toolbar'
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    TrackedEntityListComponent,
    MatToolbar
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
