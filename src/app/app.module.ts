import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SumPipeModule } from './pipe/sum.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, SumPipeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SumPipeModule]
})
export class AppModule { }
