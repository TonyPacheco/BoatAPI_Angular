import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from 'src/app/classes/alert';
import { Router, NavigationStart } from '@angular/router';

@Injectable()
export class AlertService {
  public alerts: Subject<Alert> = new Subject<Alert>();

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alerts.next();
      }
    });
  }
}
