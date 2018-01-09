import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeelingPage } from './feeling';

@NgModule({
  declarations: [
    FeelingPage,
  ],
  imports: [
    IonicPageModule.forChild(FeelingPage),
  ],
})
export class FeelingPageModule {}
