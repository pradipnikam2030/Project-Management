import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MyUrlService } from 'src/app/services/my-url.service';
import { ProjectStatusDetails } from 'src/model/ProjectStatusDetails';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private http:HttpClient, private url:MyUrlService){
    this.getCountProject();
  }

  projectCount:ProjectStatusDetails=new ProjectStatusDetails();

   show:number=0;
  showMethod(num:number){

     this.show=num;

  }

  getCountProject(){

          this.http.get(this.url.getUrl()+'projectControl/getCount').subscribe(
             (data:any)=>{
               if(data==null)
                window.alert('data not found');
                else
                {
                this.projectCount=data;
                console.log(this.projectCount.cancelledCount);
                }
             }
          );

  }

    

}
