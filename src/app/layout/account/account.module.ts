import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule, AccountService } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        AccountRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule
    ],
    declarations: [AccountComponent],
    providers: [
        AccountService 
    ]
})
export class AccountModule { }
