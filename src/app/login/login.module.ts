import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { ProjectModule } from "../project/project.module";
import {MatButtonModule} from '@angular/material/button';




@NgModule({
    declarations: [
        LoginUserComponent,
        RegisterUserComponent
    ],
    exports: [
        LoginUserComponent,
        RegisterUserComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProjectModule,
        MatButtonModule
    ]
})
export class LoginModule { }
