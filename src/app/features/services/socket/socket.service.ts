import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  constructor(){
    this.socket = io('localhost:5001', {
      //path: '/',
      transports: [
        'polling',
        //'websocket',

      //'flashsocket'
      ]
    });
  }

  public listenServer(): Observable<any> {
    return new Observable((data) => {
      this.socket.on('connection', (data: any) => {
        data.next(data);
      })
    })
  }

}
