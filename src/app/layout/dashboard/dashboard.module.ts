import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeaderComponent} from "../header/header.component";
import {SidebarComponent} from "../sidebar/sidebar.component";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderComponent,
    SidebarComponent
  ]
})
export class DashboardModule { }
