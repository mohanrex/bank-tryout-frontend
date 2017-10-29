import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AccountService } from '../../shared/index';
import { AbstractControl, ValidatorFn, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';

@Component({
    selector: 'app-form',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
    animations: [routerTransition()]
})
export class AccountComponent implements OnInit {
    accounts = [];
    accountForm: FormGroup;
    taxForm: FormGroup;
    withDrawForm: FormGroup;
    pageState = 10;
    totalAccountBalance = 0;

    constructor(private accountService: AccountService, private toasterService: ToasterService) { }

    private createForm() {
        this.accountForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            secret: new FormControl({value: Math.floor(1000 + Math.random() * 9000), disabled: true}, Validators.required),
            balance: new FormControl(0.00, [Validators.required])
        });
    }

    private createTaxForm() {
        this.taxForm = new FormGroup({
            percentile: new FormControl(0.00, [Validators.required])
        });
    }

    private createWithDrawForm(id, name) {
        this.withDrawForm = new FormGroup({
            idx: new FormControl({value: id, disabled: true}, Validators.required),
            name: new FormControl({value: name, disabled: true}, Validators.required),
            password: new FormControl('', [Validators.required]),
            amount: new FormControl(0.00, [Validators.required])
        });
    }
    
    ngOnInit() {
        this.goHome();
    }

    initCreateAccount() {
        this.pageState = 20;
        this.createForm();
    }

    initTaxAccount() {
        this.pageState = 30;
        this.createTaxForm();
    }

    initWithdraw(id, name) {
        this.pageState = 40;
        this.createWithDrawForm(id, name);
    }

    goHome() {
        this.accountService.getAccounts().subscribe(data => this.accounts = data);
        this.accountService.getTotalBalance().subscribe(data => this.totalAccountBalance = data.sum);
        this.pageState = 10;
        this.createForm();
    }

    createAccount(event) {
        if(!this.accountForm.invalid) {
            this.accountService.createAccount(
                JSON.stringify(this.accountForm.getRawValue())
            ).subscribe(data => this.goHome(), error => this.toasterService.pop('error', "Account Creation Failed"))
        } else {
            this.toasterService.pop('error', "Invalid form")
        }
    }

    taxation(event) {
        if (this.taxForm.value.percentile == 0) {
            this.toasterService.pop('error', "Please input more than 0 percent");
        } else if(!this.taxForm.invalid) {
            this.accountService.taxation(
                JSON.stringify(this.taxForm.getRawValue())
            ).subscribe(data => this.goHome(), error => this.toasterService.pop('error', "Taxation Failed"));
        } else {
            this.toasterService.pop('error', "Invalid form")
        }
    }

    withdrawal(event) {
        if(!this.withDrawForm.invalid) {
            this.accountService.withDraw(
                JSON.stringify(this.withDrawForm.getRawValue())
            ).subscribe(data => this.withDrawalSuccess(), error => this.toasterService.pop('error', "Withdrawal Failed"));
        } else {
            this.toasterService.pop('error', "Invalid form")
        }
    }

    taxationSuccess() {
        this.goHome();
        this.toasterService.pop('success', 'Taxation done');
    }

    withDrawalSuccess() {
        this.goHome();
        this.toasterService.pop('success', "Withdrawal done.");
    }

    accountCreated() {
        this.goHome();
        this.toasterService.pop('success', 'Account Added');
    }

    generateNewSecret() {
        this.accountForm.patchValue({'secret':Math.floor(1000 + Math.random() * 9000)});
    }
}
