import { Component } from '@angular/core';
import { LoginUserComponent } from './login/login-user/login-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FullStackProject';

// constructor(private app:LoginUserComponent) {
  
// }
get=0;
    show:number=0;
    showThis(value:number){
         this.show=value;
         this.get=value;
         

    }

}
