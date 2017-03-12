package com.xyz.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xyz.bean.UserInfo;
import com.xyz.dao.UserInfoDao;
import com.xyz.service.UserService;

@Transactional
@Service(value="userService")
public class UserServiceImpl implements UserService{
	@Autowired
	private UserInfoDao userInfoDao;
	
	public List<UserInfo> getUserList(){
		List<UserInfo> alluser=userInfoDao.queryAllUser();
    	System.out.println(alluser.get(0).getName());
        return alluser; 
	}
}
