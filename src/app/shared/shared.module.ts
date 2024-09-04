import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Correct module for routing

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule, // Correctly import RouterModule for routing
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    CommonModule,
    RouterModule, // Export RouterModule so other modules can use routing
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class SharedModule { }
