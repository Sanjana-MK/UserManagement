import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit{
  
  constructor(private userService :UserService, private router:Router)
  { }
    addUserRequest : User={

      id: '',
      name : '',
      email:'',
      phone:0,
      location:''

    }
    ngOnInit(): void 
    {
  
    }
    addUser()
    {
      
      return this.userService.addUser(this.addUserRequest)
      .subscribe(
        {
          next:(user) =>
          this.router.navigate(['users'])
        }
      );

  }
}
