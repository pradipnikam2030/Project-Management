package com.one.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.one.Services.ProjectDetailsService;
import com.one.entities.ProjectDetails;
import com.one.entities.ProjectStatusDetails;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("projectControl")
public class ProjectController {
	
	@Autowired
	ProjectDetailsService projectDetailsService;
	
	
	@GetMapping("getCount")
	public ProjectStatusDetails getAllCount() {
		
		
		return projectDetailsService.getProjectStatusDetails();
		
	}
	
	
	@GetMapping("updateStatus{id}and{status}")
	public boolean updateStausById(@PathVariable int id, @PathVariable String status) {
		
		
		   
		return projectDetailsService.updateStatusOfProject(id, status);
		
	
		
	}
	
	@PostMapping("addProject")
	public boolean addProject(@RequestBody ProjectDetails details) {
		  return  projectDetailsService.saveProjectDetails(details);
	}
	
	
	@GetMapping("showAllProjects")
	public List<ProjectDetails> getAllProjects(){
		  return projectDetailsService.getAllProjects();
	}

}
