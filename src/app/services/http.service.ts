import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

@Injectable()
export class HttpService {
  
  public static host = 'localhost';
  public static port = '3000';
  public static url = 'http://'+ HttpService.host + ':' + HttpService.port;

  constructor(private http: Http) { }

  get(endpoint: string, headersObject: Object): Observable<any> {
    let headers: Headers = new Headers(headersObject);
    let options: RequestOptions = new RequestOptions(
      {headers: headers}
    );

    return this.http.get(HttpService.url + endpoint, options)
      .map(
        (res: Response): Promise<any> => {
          return res.json();
        }
      )
      .catch(
        (err: Response) => Observable.throw(err.json()) 
      );
  }

  post(endpoint: string, body: any, headersObject: Object): Observable<any> {
    let headers: Headers = new Headers(headersObject);
    let options: RequestOptions = new RequestOptions(
      {headers: headers}
    );

    console.log('Posting to...:', HttpService.url + endpoint);

    return this.http.post(HttpService.url + endpoint, body, options)
      .map(
        (res: Response): Promise<any> => {
          return res.json();
        }
      )
      .catch(
        (err: Response) => Observable.throw(err.json())
      );
  }

  put(endpoint: string, body: any, headersObject: Object): Observable<any> {
    let headers: Headers = new Headers(headersObject);
    let options: RequestOptions = new RequestOptions(
      {headers: headers}
    );

    console.log('Updating to...', HttpService.url + endpoint);

    return this.http.put(HttpService.url + endpoint, body, options)
      .map(
        (res: Response): Promise<any> => {
          return res.json();
        }
      )
      .catch(
        (err: Response) => Observable.throw(err.json())
      );
  }

  delete(endpoint: string, headersObject: Object): Observable<any> {
    let headers: Headers = new Headers(headersObject);
    let options: RequestOptions = new RequestOptions(
      {headers: headers}
    );

    console.log('Deleting to...', HttpService.url + endpoint);

    return this.http.delete(HttpService.url + endpoint, options)
      .map(
        (res: Response): Promise<any> => {
          return res.json()
        }
      )
      .catch(
        (err: Response) => Observable.throw(err.json())
      );
  }

  patch(endpoint: string, body: any, headersObject: Object): Observable<any> {
    let headers: Headers = new Headers(headersObject);
    let options: RequestOptions = new RequestOptions(
      {headers: headers}
    );

    console.log('Patching to...', HttpService.url + endpoint);

    return this.http.patch(HttpService.url + endpoint, body, options)
      .map(
        (res: Response): Promise<any> => {
          return res.json();
        }
      )
      .catch(
        (err: Response) => Observable.throw(err.json())
      );
  }

}
