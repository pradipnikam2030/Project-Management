import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MyUrlService } from 'src/app/services/my-url.service';
import { RouterModule } from '@angular/router';
import { Login } from 'src/model/Login';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
 

  constructor(private http: HttpClient, private url: MyUrlService,private app:AppComponent) { }

     username:string;
     password:string;
  

  showLogin() {

    this.http.get(this.url.getUrl() + 'controller/login'+this.username+ 'and'+ this.password).subscribe(
      (data: any) => {
        if (data == true) {
          window.alert('Login Successfull...')
          this.app.get=0;    
        }
        else {
          window.alert('Enter Valid Username and Password');
          
        }
      }
    );


  }

}
