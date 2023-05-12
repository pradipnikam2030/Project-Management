package com.one.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.one.Repo.UserRepo;
import com.one.Services.UserService;
import com.one.entities.User;

@RestController
@RequestMapping("controller")
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {

	@Autowired
	UserRepo userRepo;

	@Autowired
	UserService userService;
	
	@GetMapping("login{username}and{password}")
	public boolean userLoginUser(@PathVariable String username, @PathVariable String password) {
		try {
			
			    System.out.println(username+" "+password);
               if(userService.userLogin(username, password))
            	   return true;
               return false;

		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}

	@PostMapping("addUser")
	public boolean addUser(@RequestBody User user) {

		try {
			boolean userRegister = userService.userRegister(user);
			System.out.println(userRegister);
			 System.out.println("printing1");
			  if(userRegister==false)
				  return false;
			  System.out.println("printing2");
			  return true;

		} catch (Exception e) {
			e.printStackTrace(); 
			return false;
		}

	}

}
