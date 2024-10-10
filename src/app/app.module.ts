import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CtaComponent } from './widget/cta/cta.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { IvfPackageComponent } from './pages/ivf-package/ivf-package.component';
import { PageBannerComponent } from './widget/page-banner/page-banner.component';
import { PcosComponent } from './pages/fertility/pcos/pcos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CtaComponent,
    LocationsComponent,
    IvfPackageComponent,
    PageBannerComponent,
    PcosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
