import { Component, OnInit, OnDestroy } from '@angular/core';
import { Alert } from './classes/alert';
import { AlertService } from './services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public alerts: Array<Alert> = [];

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.alertService.alerts.subscribe(alert => {
        if (alert != undefined) {
          this.alerts.push(alert);
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
