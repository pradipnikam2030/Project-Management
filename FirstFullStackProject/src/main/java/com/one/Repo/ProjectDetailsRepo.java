package com.one.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.one.entities.ProjectDetails;
import com.one.entities.ProjectStatusDetails;

public interface ProjectDetailsRepo extends JpaRepository<ProjectDetails, Integer> {
	
	
	  @Query(value="select ( select count(*) from project_details) as totalCount,\r\n"
	  		+ "(select count(*) from project_details where status='running') as runningCount,\r\n"
	  		+ "(select count(*) from project_details where status='closed') as closedCount,\r\n"
	  		+ "(select count(*) from project_details where status='cancelled') as cancelledCount", nativeQuery = true)
	  public ProjectStatusDetails getAllProjectCount();

}
