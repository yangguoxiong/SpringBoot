package com.movit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;

@Controller
public class LayoutController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String getHomepage() {
		//主页
		return "pages/homepage";
	}

	@RequestMapping("/layout")
	public String getLayout(Model model) throws FileNotFoundException {
		//获取服务器所有layout的html文件
		File file = ResourceUtils.getFile("classpath:static/wtchk/layout");
		ArrayList<String> fileList = new ArrayList<String>();
		if(file.exists()){
			File[] files = file.listFiles();
			if(files != null){
				for(File htmlFile:files){
					//读取全部html文件
					fileList.add(htmlFile.getName());
				}
			}
		}
		//去除assets文件
		fileList.remove(fileList.indexOf("assets"));
		//放入model
		model.addAttribute("fileList", fileList);
		return "pages/layout";
	}

	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public String getTestpage() {
		//主页
		return "pages/testpage";
	}
}
