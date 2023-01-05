import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// imported all the Material Components in here:
import { MaterialExampleModule } from 'src/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillSetComponent } from './skill-set/skill-set.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IntroductionComponent,
    SkillSetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
