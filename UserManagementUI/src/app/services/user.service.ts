import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseApiUrl:string='https://localhost:7222'
  constructor(private http:HttpClient) { }

   getAllUsers():Observable<User[]>
   {
     return this.http.get<User[]>(this.baseApiUrl+'/api/User/GetAllUsers');
   
   }
   addUser(addUserRequest:User):Observable<User>
   {
    addUserRequest.id ='00000000-0000-0000-0000-000000000000';
    return this.http.post<User>(this.baseApiUrl+'/api/User/AddUser',addUserRequest);
   }
   getUser(id:string):Observable<User>
   {
    let res=this.http.get<User>(this.baseApiUrl + '/api/User/GetUser/'+id);
    return res;
   }
   updateUser(id:string,updateUserRequest:User):Observable<User>
   {
    return this.http.put<User>(this.baseApiUrl + '/api/User/UpdateUser/'+id,updateUserRequest)
   }
   deleteUser(id:string):Observable<User>
   {
    let res=this.http.delete<User>(this.baseApiUrl + '/api/User/DeleteUser/'+id);
    return res;
   }

}
