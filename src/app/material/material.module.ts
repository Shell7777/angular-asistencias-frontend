import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

const MaterialComponents = [
  MatDatepickerModule,
  MatBadgeModule,
  MatMenuModule,
  MatTabsModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,

]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
