import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MyUrlService } from 'src/app/services/my-url.service';
import { ProjectDetails } from 'src/model/ProjectDetails';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

  constructor(private http:HttpClient, private url:MyUrlService){}

  details:ProjectDetails=new ProjectDetails();

  statusValue:string="Registered";

  saveProject(){

          console.warn(this.details);
          this.http.post(this.url.getUrl()+'projectControl/addProject', this.details).subscribe(
            (data:any)=>{
                 if(data)
                  window.alert("Project Added Succesfully...");
                  else
                  window.alert("Error Occured, Please Try Again....");

            }
          );

    
  }

}
