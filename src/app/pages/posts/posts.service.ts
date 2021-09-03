
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { ApiHttpService } from '../../core/services/api/api-http.service';
@Injectable({
  providedIn: 'root',
})
export class PostsService extends ApiHttpService{
  
 constructor(http:HttpClient) { 
  super('https://jsonplaceholder.typicode.com/posts',http);
}
  

}
