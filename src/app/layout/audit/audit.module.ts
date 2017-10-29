import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditRoutingModule } from './audit-routing.module';
import { AuditComponent } from './audit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule, AccountService } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        AuditRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule
    ],
    declarations: [AuditComponent],
    providers: [
        AccountService 
    ]
})
export class AuditModule { }
