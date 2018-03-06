import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RespondentsPage } from './respondents';

@NgModule({
  declarations: [
    RespondentsPage,
  ],
  imports: [
    IonicPageModule.forChild(RespondentsPage),
  ],
})
export class RespondentsPageModule {}
