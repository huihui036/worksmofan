import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabnaveComponent } from './component/tabnave/tabnave.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { MianComponent } from './component/mian/mian.component';

@NgModule({
  declarations: [
    AppComponent,
    TabnaveComponent,
    HomeComponent,
    FooterComponent,
    MianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
