import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducersPageComponent } from './pages/producers-page/producers-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProducersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducersRoutingModule { }
