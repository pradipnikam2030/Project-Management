package com.one.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.one.Repo.ProjectDetailsRepo;
import com.one.entities.ProjectDetails;
import com.one.entities.ProjectStatusDetails;

@Service
public class ProjectDetailsService {

	@Autowired
	ProjectDetailsRepo projectDetailsRepo;

	public ProjectStatusDetails getProjectStatusDetails() {
		try {
			
			ProjectStatusDetails allProjectCount = projectDetailsRepo.getAllProjectCount();
			
			System.out.println(allProjectCount.getCancelledCount());
			System.out.println(allProjectCount.getTotalCount());
			
			return allProjectCount;

		} catch (Exception e) {
			return null;
		}
	}

	// update status...
	public boolean updateStatusOfProject(int id, String status) {
		try {
			ProjectDetails projectDetails = projectDetailsRepo.findById(id).get();
			projectDetails.setStatus(status);
			projectDetailsRepo.save(projectDetails);
			return true;
		} catch (Exception e) {

			e.printStackTrace();
			return false;
		}
	}

	public boolean saveProjectDetails(ProjectDetails details) {
		try {
			projectDetailsRepo.save(details);

			return true;

		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}

	public List<ProjectDetails> getAllProjects() {
		try {
			List<ProjectDetails> projectList = projectDetailsRepo.findAll();

			return projectList;

		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
