import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{

  public userDetails:User ={
    id: '',
    name : '',
    email:'',
    phone:0,
    location:''
  };
  constructor(private  route:ActivatedRoute,private userService:UserService, private router:Router)
  {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
       const id= params.get('id');
       if(id){
       this.userService.getUser(id).subscribe({
        next:(response)=>{
          this.userDetails=response;
          console.log(response);
          
        }
       });
      }
      }
    })
  }
  updateUser()
  {
    this.userService.updateUser(this.userDetails.id,this.userDetails)
    .subscribe({
      next:(user)=>
      this.router.navigate(['users'])
    })
    ;
  }
  deleteUser(id:string)
  {
    this.userService.deleteUser(id)
    .subscribe({
      next:(response) =>
      {
          this.router.navigate(['users']);
      }
    });
  }

}
