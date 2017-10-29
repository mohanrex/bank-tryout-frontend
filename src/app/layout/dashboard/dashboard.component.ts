import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AccountService } from '../../shared/index';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    accountCount = {"count":0};
    totalBalance = {"sum":"0.00"};
    lowestBalance = {"account":"N/A", "balance":"0.00"};
    highestBalance = {"account":"N/A", "balance":"0.00"};

    constructor(private accountService: AccountService) {
        
    }

    ngOnInit() {
        this.initializeComponent();
    }

    initializeComponent() {
        this.accountService.getAccountsCount().subscribe(data => this.accountCount = data);
        this.accountService.getTotalBalance().subscribe(data => this.convertRupee(data));
        this.accountService.getLowestAccount().subscribe(data => this.convertLowestBalance(data));
        this.accountService.getHighestAccount().subscribe(data => this.convertHighestBalance(data));
    }

    convertRupee(data = {"sum":0.00}) {
        this.totalBalance = {"sum": this.abbreviateNumber(data.sum)};
    }

    convertLowestBalance(data = []) {
        this.lowestBalance = this.convertAccountBalance(data);
    }

    convertHighestBalance(data = []) {
        this.highestBalance = this.convertAccountBalance(data);
    }

    convertAccountBalance(data = []) {
        var accounts = "";
        if (data.length > 0) {
            var balance = this.abbreviateNumber(data[0].balance);
            for(var account of data) {
                accounts = accounts + account.name + ", ";
            }
            accounts = accounts.slice(0, -2);
        } else {
            var balance = "0.00";
            var accounts = "N/A"
        }
        return {"account":accounts, "balance":balance}
    }

    abbreviateNumber(value: number) {
        if (value >= 1000000000) {
            return (value / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (value >= 1000000) {
            return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (value >= 1000) {
            return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return value.toString();
    }
}
