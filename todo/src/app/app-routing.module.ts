import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdamListComponent } from './adam-list/adam-list.component';
import { LearnJsTsComponent } from './learn-js-ts/learn-js-ts.component';
import { LearndesignComponent } from './learndesign/learndesign.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {
    path : 'samplebs',component : LearndesignComponent
  },
  {
    path :'adamlist',component : AdamListComponent
  },
  {
    path : 'sample', component : SampleComponent
  },
  {
    path : 'learnjsts',component : LearnJsTsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
