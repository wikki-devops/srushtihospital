import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PcosComponent } from './treatments/pcos/pcos.component';
import { TubalBlocksComponent } from './treatments/tubal-blocks/tubal-blocks.component';
import { ReproductiveSurgeryComponent } from './treatments/reproductive-surgery/reproductive-surgery.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pcos', component: PcosComponent },
  { path: 'tubal-blocks', component: TubalBlocksComponent },
  { path: 'reproductive-surgery', component: ReproductiveSurgeryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
