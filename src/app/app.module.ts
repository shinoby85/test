import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import {FormsModule} from "@angular/forms";
import { NewpipePipe } from './nee/newpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Part1Component,
    Part2Component,
    NewpipePipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
