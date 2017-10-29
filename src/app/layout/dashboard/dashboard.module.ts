import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule, AccountService } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
    ],
    declarations: [
        DashboardComponent,
    ],
    providers: [
        AccountService 
    ]
})
export class DashboardModule { }
