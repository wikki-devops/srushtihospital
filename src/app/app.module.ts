import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CtaComponent } from './widget/cta/cta.component';
import { AboutFounderComponent } from './pages/about-founder/about-founder.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { PageBannerComponent } from './widget/page-banner/page-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CtaComponent,
    AboutFounderComponent,
    DoctorsComponent,
    PageBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
