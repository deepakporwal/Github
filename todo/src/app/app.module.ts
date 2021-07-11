import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdamListComponent } from './adam-list/adam-list.component';
import { LearndesignComponent } from './learndesign/learndesign.component';
import { SampleComponent } from './sample/sample.component';
import { LearnJsTsComponent } from './learn-js-ts/learn-js-ts.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

@NgModule({
  declarations: [	
    AppComponent,
      AdamListComponent,
      LearndesignComponent,
      SampleComponent,
      LearnJsTsComponent,
      ReactiveformsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
