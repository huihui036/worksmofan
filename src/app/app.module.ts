import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabnaveComponent } from './component/tabnave/tabnave.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { MianComponent } from './component/mian/mian.component';
import { ProjectComponent } from './component/project/project.component';
import { ServerComponent } from './component/server/server.component';
import { ContainerComponent } from './component/container/container.component';
import { ProjectpageComponent } from './component/projectpage/projectpage.component';
import { HeadimgaesComponent } from './component/headimgaes/headimgaes.component';
import { SeavepageComponent } from './component/seavepage/seavepage.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutsComponent } from './component/abouts/abouts.component';
import { InformationComponent } from './component/information/information.component';
import { RotationComponent } from './component/rotation/rotation.component';

@NgModule({
  declarations: [
    AppComponent,
    TabnaveComponent,
    HomeComponent,
    FooterComponent,
    MianComponent,
    ProjectComponent,
    ServerComponent,
    ContainerComponent,
    ProjectpageComponent,
    HeadimgaesComponent,
    SeavepageComponent,
    ContactComponent,
    AboutsComponent,
    InformationComponent,
    RotationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
