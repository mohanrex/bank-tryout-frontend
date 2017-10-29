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

    /**
     * Creates search form
     */
    private createForm() {
        this.searchForm = new FormGroup({
            amount: new FormControl(0.00, [Validators.required])
        });
    }
    
    /**
     * Default initialization function
     */
    ngOnInit() {
        this.goHome();
    }

    /**
     * Reusable page initialization function
     */
    goHome() {
        this.createForm();
        this.searchForm.valueChanges.subscribe(() => {
            this.searchAccount();
        });
        this.accountService.getAccounts().subscribe(data => this.accounts = data);
        this.accountService.getLowestAccount().subscribe(data => this.lowestAccount = data);
    }

    /**
     * Filters account based on the form value
     */
    searchAccount() {
        if(!this.searchForm.invalid) {
            this.accountService.searchAccount(
                JSON.stringify(this.searchForm.getRawValue())
            ).subscribe(data => this.accounts = data), error => this.toasterService.pop('error', "Search Failed");
        }
    }
}
