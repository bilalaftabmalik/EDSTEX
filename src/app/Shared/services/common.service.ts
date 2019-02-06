

import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor() {}

  switchMessageFormEvent = new EventEmitter<any>();
    switchMessageForm(obj) {
        this.switchMessageFormEvent.emit(obj);
        console.log('service data emitted', obj);
    }



}
