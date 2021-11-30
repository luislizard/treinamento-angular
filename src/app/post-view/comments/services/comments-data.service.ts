import { Comments } from './../interfaces/comments.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsDataService {
  apiUrl = 'https://61a4adc44c822c0017041d9e.mockapi.io'
  constructor(private http: HttpClient) {
  }

  getComments(){
    return this.http.get<Comments[]>(this.apiUrl+'/comments');
  }
}
