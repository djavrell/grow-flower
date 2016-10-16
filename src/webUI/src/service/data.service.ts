/**
 * Created by djavrell on 10/10/16.
 */

import { Injectable }     from '@angular/core';
import {
  Http,
  Headers,
  Response
}           from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class DataService {
  constructor(private _http: Http) {}

  getData(): Observable<any> {
    let header = new Headers();

    return this._http.get('http://localhost:3000/data', {headers: header})
      .map(this.extractData);
  }

  extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
}
