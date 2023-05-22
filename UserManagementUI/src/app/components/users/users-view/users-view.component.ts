import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model'
import { UserService} from 'src/app/services/user.service'
@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit{

public UsersList : any[]=[];
  public count:number=0;
constructor(private userService:UserService)
{

}
ngOnInit(): void {
  this.userService.getAllUsers()
  .subscribe({
    
       next:(result) =>{
        this.UsersList=result;
        this.count=this.UsersList.length;

       }
     }
  );

}

}
