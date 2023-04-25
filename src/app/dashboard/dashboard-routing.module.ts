import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [{
  path: '',
  component: DashboardPageComponent,
  children: [
    {
      path: '',
      redirectTo: 'zamowienia',
      pathMatch: 'full'
    },
    {
      path: 'zamowienia',
      loadChildren: () => import('./submodules/orders/orders.module').then(m => m.OrdersModule)
    },
    {
      path: 'klienci',
      loadChildren: () => import('./submodules/clients/clients.module').then(m => m.ClientsModule)
    },
    {
      path: 'urzadzenia',
      loadChildren: () => import('./submodules/devices/devices.module').then(m => m.DevicesModule)
    },
    {
      path: 'producenci',
      loadChildren: () => import('./submodules/producers/producers.module').then(m => m.ProducersModule)
    },
    {
      path: '**',
      redirectTo: 'zamowienia'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
