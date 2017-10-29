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

    /**
     * Creates account form
     */
    private createForm() {
        this.accountForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            secret: new FormControl({value: Math.floor(1000 + Math.random() * 9000), disabled: true}, Validators.required),
            balance: new FormControl(0.00, [Validators.required])
        });
    }

    /**
     * Creates tax form
     */
    private createTaxForm() {
        this.taxForm = new FormGroup({
            percentile: new FormControl(0.00, [Validators.required])
        });
    }

    /**
     * Creates withdrawal form
     */
    private createWithDrawForm(id, name) {
        this.withDrawForm = new FormGroup({
            idx: new FormControl({value: id, disabled: true}, Validators.required),
            name: new FormControl({value: name, disabled: true}, Validators.required),
            password: new FormControl('', [Validators.required]),
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
     * Initializes create account form page
     */
    initCreateAccount() {
        this.pageState = 20;
        this.createForm();
    }

    /**
     * Initializes tax form page
     */
    initTaxAccount() {
        this.pageState = 30;
        this.createTaxForm();
    }

    /**
     * Initializes withdrawal form page
     */
    initWithdraw(id, name) {
        this.pageState = 40;
        this.createWithDrawForm(id, name);
    }

    /**
     * Initializes home page functions
     */
    goHome() {
        this.accountService.getAccounts().subscribe(data => this.accounts = data);
        this.accountService.getTotalBalance().subscribe(data => this.totalAccountBalance = data.sum);
        this.pageState = 10;
        this.createForm();
    }

    /**
     * Create accounts in the backend
     */
    createAccount(event) {
        if(!this.accountForm.invalid) {
            this.accountService.createAccount(
                JSON.stringify(this.accountForm.getRawValue())
            ).subscribe(data => this.goHome(), error => this.toasterService.pop('error', "Account Creation Failed"))
        } else {
            this.toasterService.pop('error', "Invalid form")
        }
    }

    /**
     * Taxation form submit function
     * @param event 
     */
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

    /**
     * Withdrawal form submit function
     * @param event 
     */
    withdrawal(event) {
        if(!this.withDrawForm.invalid) {
            this.accountService.withDraw(
                JSON.stringify(this.withDrawForm.getRawValue())
            ).subscribe(data => this.withDrawalSuccess(), error => this.toasterService.pop('error', "Withdrawal Failed"));
        } else {
            this.toasterService.pop('error', "Invalid form")
        }
    }

    /**
     * Taxation form success function
     */
    taxationSuccess() {
        this.goHome();
        this.toasterService.pop('success', 'Taxation done');
    }

    /**
     * Withdrawal form success function
     */
    withDrawalSuccess() {
        this.goHome();
        this.toasterService.pop('success', "Withdrawal done.");
    }

    /**
     * Create account form success function
     */
    accountCreated() {
        this.goHome();
        this.toasterService.pop('success', 'Account Added');
    }

    /**
     * Generate new secret key
     */
    generateNewSecret() {
        this.accountForm.patchValue({'secret':Math.floor(1000 + Math.random() * 9000)});
    }
}
