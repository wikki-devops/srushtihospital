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
import { EndometriosisComponent } from './treatments/endometriosis/endometriosis.component';
import { UterinePolypsComponent } from './treatments/uterine-polyps/uterine-polyps.component';
import { UterineFibroidsComponent } from './treatments/uterine-fibroids/uterine-fibroids.component';
import { BicornuateUterusComponent } from './treatments/bicornuate-uterus/bicornuate-uterus.component';
import { OvarianCystsComponent } from './treatments/ovarian-cysts/ovarian-cysts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PcosComponent,
    TubalBlocksComponent,
    ReproductiveSurgeryComponent,
    ServiceMenu1Component,
    EndometriosisComponent,
    UterinePolypsComponent,
    UterineFibroidsComponent,
    BicornuateUterusComponent,
    OvarianCystsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
