package com.xyz.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Scope;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.xyz.bean.UserInfo;
import com.xyz.dao.UserInfoDao;
import com.xyz.service.UserService;

@RestController  
@Scope(value="prototype")
public class UserControll {
	    
	@Autowired
	    private UserService userService;
 
	      
//	    @RequestMapping("/showUser")  
	    @RequestMapping(value = "/showUser", method = RequestMethod.GET)
	    public @ResponseBody List<UserInfo> toIndex(HttpServletRequest request,Model model){  
	    	List<UserInfo> alluser=userService.getUserList();
	        return alluser; 
	    }
	    
}
