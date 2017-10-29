import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AbstractControl, ValidatorFn, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    public formValid: Boolean;

    constructor(public router: Router) {
    }

    private createForm() {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
        });
    }

    ngOnInit() {
        this.createForm();
        this.formValid = true;
    }

    doLogin(event) {
        if(this.loginForm.value.email == "manager@trukish.com" && this.loginForm.value.password == "test1234") {
            this.formValid = true;
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigateByUrl('/dashboard');
        } else {
            this.formValid = false;
        }
    }

    onLoggedin(name, password) {
        console.log(name);
        
    }
}
