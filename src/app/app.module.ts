import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PcosComponent } from './treatments/pcos/pcos.component';
import { TubalBlocksComponent } from './treatments/tubal-blocks/tubal-blocks.component';
import { ReproductiveSurgeryComponent } from './treatments/reproductive-surgery/reproductive-surgery.component';
import { ServiceMenu1Component } from './widgets/service-menu-1/service-menu-1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PcosComponent,
    TubalBlocksComponent,
    ReproductiveSurgeryComponent,
    ServiceMenu1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
