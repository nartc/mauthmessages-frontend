import { EventEmitter, Injectable } from '@angular/core';
import { SweetAlertService } from 'angular-sweetalert-service/js';

@Injectable()
export class ErrorService {

  constructor(private alertService: SweetAlertService) { }

  handleError(error: any) {
    console.log('error', error);
    this.alertService.alert({
      title: 'Error',
      text: `${error.status}: ${error._body}`,
      type: 'warning'
    });
  }

}
