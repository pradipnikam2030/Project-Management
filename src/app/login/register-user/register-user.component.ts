import { Component } from '@angular/core';
import { Register } from '../../../model/Register';
import { HttpClient } from '@angular/common/http';
import { MyUrlService } from 'src/app/services/my-url.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  constructor(private http: HttpClient, private url:MyUrlService) { }

  register:Register=new Register();

  result: string;


  registerUser() {
    console.log(this.register);

     if(this.register.username!=null && this.register.passoword!=null && this.register.firstname!=null&& this.register.lastname!=null&& this.register.email!=null){
    this.http.post(this.url.getUrl()+'controller/addUser', this.register).subscribe(
      (data: any) => { 


        if (data) {
          window.alert('Registration Successfull....')
        }
        else{
          window.alert('Username already Exist')
        }
        this.register = new Register();
        this.result = '';

      
      }
    );

    }else{
            window.alert("Please enter all the field");
    }

  }

}
