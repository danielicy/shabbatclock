// Angular Modules
import { Inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotFoundError, BadInput, AppError } from '../../errorhandling';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(@Inject(String) private url: string ,private http:HttpClient) { }

  getAll(){
   return this. http.get(this.url)
   
   .pipe(
       map(response => response),
    catchError(this.handleError)
  );
  }
  
  create(resource:any){
    return this.http.post(this.url,JSON.stringify(resource))
    .pipe(
      map(response => response),
      catchError(this.handleError)
    );
      
  }
  
  update(resource:any){
    return this.http.put(this.url + '/' +resource.id ,resource)  
    .pipe(
      map(response => response),
      catchError(this.handleError)
    );
      }
  
  delete(id:any){
    return  this.http.delete(this.url +'/' + id)
    .pipe(
      map(response => response),
      catchError(this.handleError)
    );
      }
  
      private handleError(error:Response){
        if(error.status === 404)
          return throwError( new NotFoundError());
          
        if (error.status === 400)
          return throwError(new BadInput(error));
  
         return throwError(new AppError(error));
      }
    
  }
  