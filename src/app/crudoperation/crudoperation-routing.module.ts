import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudoperationPage } from './crudoperation.page';

const routes: Routes = [
  {
    path: '',
    component: CrudoperationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudoperationPageRoutingModule {}
