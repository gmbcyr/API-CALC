import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {EvalSalRequest} from './evalSalRequest';
import {EmpData} from './empData';
import {EMPS} from './mock-emps';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class SalcalcService {



  private salCalcUrl = 'api/emps';  // URL to web api
  private evalSalUrl = 'https://dofxdxglq8.execute-api.us-east-1.amazonaws.com/Test/eval-sal';
  private evalSalUrl_self = 'https://dofxdxglq8.execute-api.us-east-1.amazonaws.com/Test/eval-sal-self-emp';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Authorization': '',
      'X-Amz-Date':'',
      'x-api-key': '9QyulBM3YJ1DhsVdfQZ2l4BPtPMY6uh01cSOrzwi'
     })
  };

  constructor(private http:HttpClient, private srvMsg:MessageService) { }

  getEmps(): Observable<EmpData[]>{
    //const emps = of(EMPS);
    //this.srvMsg.add('SalcalcService : All done!');
    /*const result = this.http.get<EmpData[]>(this.salCalcUrl);
    this.srvMsg.add('SalcalcService : All done!');
    return result;*/
    return this.http.get<EmpData[]>(this.salCalcUrl)
          .pipe(
            tap(_ => this.log('fetched emps')),
            catchError(this.handleError<EmpData[]>('getEmps',[]))
          );
  }


  getEvalSal(obj:EvalSalRequest):Observable<EvalSalRequest>{

    return this.http.post<EvalSalRequest>(this.evalSalUrl_self,obj,this.httpOptions,).pipe(
      tap(_ => this.log(`fetched evalSal Response`)),
      catchError(this.handleError<EvalSalRequest>(`getEvalSal`))
    );
  }


  getEvalSal2(obj:EvalSalRequest){

    return this.http.post(this.evalSalUrl_self,obj,this.httpOptions);
  }

  getEvalSalInitConfig(){

    return this.http.post(this.evalSalUrl_self,{'action':'init'},this.httpOptions);
  }





  getEmp(id:number):Observable<EmpData>{
    const theUrl =`${this.salCalcUrl}/${id}`;
    /*const emp=EMPS.find(h => h.pay_r ===id)!;
    this.srvMsg.add(`SalCalc: fetched emp pay_r=${id}`);
    return of(emp);*/
    return this.http.get<EmpData>(theUrl).pipe(
      tap(_ => this.log(`fetched emp id=${id}`)),
      catchError(this.handleError<EmpData>(`GetEmp id=${id}`))
    );
  }






  /** PUT: update the emp on the server */
updateEmp(emp: EmpData): Observable<any> {
  return this.http.put(this.salCalcUrl, emp, this.httpOptions).pipe(
    tap(_ => this.log(`updated emp id=${emp.pay_r}`)),
    catchError(this.handleError<any>('updateEmp'))
  );
}


/** POST: add a new hero to the server */
addEmp(hero: EmpData): Observable<EmpData> {
  return this.http.post<EmpData>(this.salCalcUrl, hero, this.httpOptions).pipe(
    //tap((newHero: EmpData) => this.log(`added hero w/ id=${newHero.id}`)),
    catchError(this.handleError<EmpData>('addHero'))
  );
}




  /** Log a empService message with the MessageService */
private log(message: string) {
  this.srvMsg.add(`empService with msg -> ${message}`);
}

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
