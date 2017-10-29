import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AccountService } from '../../shared/index';
import { AbstractControl, ValidatorFn, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';

@Component({
    selector: 'app-form',
    templateUrl: './audit.component.html',
    styleUrls: ['./audit.component.scss'],
    animations: [routerTransition()]
})
export class AuditComponent implements OnInit {
    accounts = [];
    lowestAccount = [];
    searchForm: FormGroup;

    constructor(private accountService: AccountService, private toasterService: ToasterService) { }

    private createForm() {
        this.searchForm = new FormGroup({
            amount: new FormControl(0.00, [Validators.required])
        });
    }
    
    ngOnInit() {
        this.goHome();
    }

    goHome() {
        this.accountService.getAccounts().subscribe(data => this.accounts = data);
        this.accountService.getLowestAccount().subscribe(data => this.lowestAccount = data);
        this.createForm();
        this.searchForm.valueChanges.subscribe(() => {
            this.searchAccount();
        });
    }

    searchAccount() {
        if(!this.searchForm.invalid) {
            this.accountService.searchAccount(
                JSON.stringify(this.searchForm.getRawValue())
            ).subscribe(data => this.accounts = data), error => this.toasterService.pop('error', "Search Failed");
        }
    }
}
