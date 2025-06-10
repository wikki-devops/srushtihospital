import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PcosComponent } from './treatments/pcos/pcos.component';
import { TubalBlocksComponent } from './treatments/tubal-blocks/tubal-blocks.component';
import { ReproductiveSurgeryComponent } from './treatments/reproductive-surgery/reproductive-surgery.component';
import { EndometriosisComponent } from './treatments/endometriosis/endometriosis.component';
import { UterinePolypsComponent } from './treatments/uterine-polyps/uterine-polyps.component';
import { UterineFibroidsComponent } from './treatments/uterine-fibroids/uterine-fibroids.component';
import { BicornuateUterusComponent } from './treatments/bicornuate-uterus/bicornuate-uterus.component';
import { OvarianCystsComponent } from './treatments/ovarian-cysts/ovarian-cysts.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pcos', component: PcosComponent },
  { path: 'tubal-blocks', component: TubalBlocksComponent },
  { path: 'reproductive-surgery', component: ReproductiveSurgeryComponent },
  { path: 'endometriosis', component: EndometriosisComponent },
  { path: 'uterine-polyps', component: UterinePolypsComponent },
  { path: 'uterine-fibroids', component: UterineFibroidsComponent },
  { path: 'bicornuate-uterus', component: BicornuateUterusComponent },
  { path: 'ovarian-cysts', component: OvarianCystsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
