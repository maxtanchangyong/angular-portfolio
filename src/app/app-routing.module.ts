import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillSetComponent } from './skill-set/skill-set.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { animation: 'dashboard' } },
  { path: 'introduction', component: IntroductionComponent, data: { animation: 'introduction' } },
  { path: 'skillset', component: SkillSetComponent, data: { animation: 'skillset' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
