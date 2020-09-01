package com.movit.controller;

import com.movit.utils.Account;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@RequestMapping("/frontEnd")
@Controller
public class FrontEndController {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@RequestMapping("/cmsJson")
	@ResponseBody
	public Map<String, Object> cmsJson(){
		logger.info("coming into cms json !!!");
		Map<String, Object> map = new HashMap<>();
		map.put("name", "mark");
		map.put("account", new Account(10));
		return map;
	}
}
