import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MyUrlService } from 'src/app/services/my-url.service';
import { ProjectDetails } from 'src/model/ProjectDetails';

@Component({
  selector: 'app-show-all-project',
  templateUrl: './show-all-project.component.html',
  styleUrls: ['./show-all-project.component.css']
})
export class ShowAllProjectComponent {


  project:ProjectDetails[]=[];

  constructor(private http:HttpClient, private url:MyUrlService){

    this.http.get(this.url.getUrl()+'projectControl/showAllProjects').subscribe(
      (data:any)=>{
         if(data==null)
         window.alert('Projects not found...');
         else
         this.project=data;
      }
    );

  }


  showStatus(projectId:number, projectStatus:string){
    console.log(projectId)
         this.http.get(this.url.getUrl()+'projectControl/updateStatus'+projectId+'and'+projectStatus).subscribe(
            (data:any)=>{
                 
              if(!data)
                window.alert('data not found');
                else
                {
                  for(let i=0; i<this.project.length; i++){
                      if(this.project[i].id==projectId)
                      {
                        this.project[i].status=projectStatus;
                        break;
                      }
                  }
                }

            }
         );

  }

 
}
