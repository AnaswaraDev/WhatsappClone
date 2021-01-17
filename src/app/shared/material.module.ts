import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatIconModule} from  '@angular/material/icon';


const modules: MatIconModule[] =  [
  MatIconModule
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      modules
    
  ],
    exports: [
     modules
   ]
})
export class MaterialModule { }
