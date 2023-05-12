package com.one.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.one.entities.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	
          @Query(value="select count(username) from user where username=?", nativeQuery = true)
           int countByUsername(String username);
           
           User findByUsername(String username);

}
