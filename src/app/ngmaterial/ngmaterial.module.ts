import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';

const materialcomponents:any = [
            MatToolbarModule,
            MatButtonModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatCardModule,
            MatInputModule,
            MatButtonModule,
            MatFormFieldModule,
            MatToolbarModule,
            MatTableModule,
            MatSidenavModule,
            MatListModule,
            MatSelectModule,
            MatRadioModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatDialogModule
                          
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialcomponents
  ],
  exports : [
    materialcomponents
  ]
})
export class NgmaterialModule { }
