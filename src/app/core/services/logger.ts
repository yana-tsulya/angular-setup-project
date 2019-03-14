/* tslint:disable:no-console */
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Logger {

  constructor( ) { }

  log(message: string, title?: string) {
    if (!environment.production) {
      const msg = title ? title + ': ' + message : message;
      console.log(msg);
    }
  }

  info(message: any, title?: string) {
    if (!environment.production) {
      const msg = title ? title + ': ' + message : message;
      console.info(msg);
    }
  }

  warn(message: string, title?: string) {
    if (!environment.production) {
      const msg = title ? title + ': ' + message : message;
      console.warn(msg);
    }
  }

  error(message: string, title?: string) {
    const msg = title ? title + ': ' + message : message;
    if (!environment.production) {
      console.error(msg);
    }
  }
}
