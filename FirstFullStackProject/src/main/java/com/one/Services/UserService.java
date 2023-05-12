package com.one.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.one.Repo.UserRepo;
import com.one.entities.User;

@Service
public class UserService {

	@Autowired
	UserRepo userRepo;

	public boolean userLogin(String username, String password) {
		try {
			// System.out.println(count);
			System.out.println("here1");
			int count = userRepo.countByUsername(username);

			System.out.println(count);
System.out.println("--------------------------------");
			if (count == 1)  {
				User user = userRepo.findByUsername(username);
				if (user.getUsername().equals(username) && user.getPassoword().equals(password))
				{
					System.out.println("in method");
					System.out.println(user.getUsername()+"=> "+ username);
					System.out.println(user.getPassoword()+"->"+password);
					System.out.println("=========================");
					return true;
				}
				System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@");
				return false;

			}
			System.out.println("*************************");
			return false;

		} catch (Exception e) {

			return false;
		}

	}

	public boolean userRegister(User user) {

		String username = user.getUsername();

		int count = userRepo.countByUsername(username);
		System.out.println(count);
		if (count == 0) {
			userRepo.save(user);
			return true;
		} else {

			return false;
		}
	}

}
