import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

const BootstrapComponents = [
  NgbPaginationModule, 
  NgbAlertModule
]

@NgModule({
  declarations: [],
  imports: [BootstrapComponents],
  exports: [BootstrapComponents]
})
export class NgBootstrapModule { }
