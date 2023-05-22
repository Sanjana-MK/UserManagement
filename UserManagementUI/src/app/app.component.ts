import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public showComponent:boolean=false;
  constructor(private router:Router)
  {

  }
 public allowLogin:any;
  ngOnInit(): void {
    if (this.router.url === '/login' || this.router.url == '/') {
      this.showComponent = false
      }
      else{
        this.showComponent=true;
      }
  }

  title = 'UserManagement';
}
