import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudoperationPageRoutingModule } from './crudoperation-routing.module';

import { CrudoperationPage } from './crudoperation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudoperationPageRoutingModule
  ],
  declarations: [CrudoperationPage]
})
export class CrudoperationPageModule {}
