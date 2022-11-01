import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { Billie } from './billie/billie.component';
import { Camila } from './camila/camila.component';
import { Katy } from './katy/katy.component';
import { Element } from './element/element.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, Billie, Camila, Katy, Element],
  bootstrap: [AppComponent],
})
export class AppModule {}
