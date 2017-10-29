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

    /**
     * Initialization function
     */
    ngOnInit() {
        this.initializeComponent();
    }

    /**
     * Initialize all the components with its value from backend
     */
    initializeComponent() {
        this.accountService.getAccountsCount().subscribe(data => this.accountCount = data);
        this.accountService.getTotalBalance().subscribe(data => this.convertRupee(data));
        this.accountService.getLowestAccount().subscribe(data => this.convertLowestBalance(data));
        this.accountService.getHighestAccount().subscribe(data => this.convertHighestBalance(data));
    }

    /**
     * Converts ruppee to abbreviated amount
     * @param data : dict of total balance
     */
    convertRupee(data = {"sum":0.00}) {
        this.totalBalance = {"sum": this.abbreviateNumber(data.sum)};
    }

    /**
     * Formats lowest account balance
     * @param data : list of lowest account balances
     */
    convertLowestBalance(data = []) {
        this.lowestBalance = this.convertAccountBalance(data);
    }

    /**
     * Formats highest account balance
     * @param data : list of highest account balances
     */
    convertHighestBalance(data = []) {
        this.highestBalance = this.convertAccountBalance(data);
    }

    /**
     * Formats the accounts for the view
     * @param data : List of account
     */
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

    /**
     * Converts ruppee with abbreaviated amount like 10K, 10M etc.
     * @param value - Real value to be converted to abbreviated format
     */
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
