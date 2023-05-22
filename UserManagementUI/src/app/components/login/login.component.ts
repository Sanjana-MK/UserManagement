import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public authorized: boolean=false;
  public submit: boolean=false;
  constructor(private router : Router)
  {

  }
  public uname:string="";
  public pass:string="";
  ngOnInit(): void {
    
    
  }

  public authorizeUser ()
  {
    
    if(this.uname=="Admin" && this.pass=="123")
    {
      this.authorized=true
      this.router.navigate(['users']);
    }
    this.submit=true;
  }
}
