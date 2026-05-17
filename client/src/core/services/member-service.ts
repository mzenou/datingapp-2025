import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../types/user';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private http = inject(HttpClient)
  private baseUrl = 'https://localhost:5001/api/'
  
  getMembers() {
      return this.http.get<User[]>(this.baseUrl + 'members');
   
  }

}
