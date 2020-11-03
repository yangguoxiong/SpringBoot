package com.movit.controller;

import com.google.common.eventbus.AsyncEventBus;
import com.movit.event.Coupon;
import com.movit.event.CouponEvent;
import com.movit.event.SpringContextHolder;
import com.movit.event.bus.InitEvent;
import com.movit.utils.Account;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@RestController
public class FrontEndController {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private AsyncEventBus asyncEventBus;

	@RequestMapping("/cmsJson")
	@ResponseBody
	public Map<String, Object> cmsJson(){
		logger.info("coming into cms json !!!");
		Map<String, Object> map = new HashMap<>();
		map.put("name", "mark");
		map.put("account", new Account(10));
		return map;
	}

	/**
	 * spring异步处理事件测试
	 * @return
	 */
	@RequestMapping(value = "/spring/asyn" ,method = RequestMethod.GET)
	public String asynEvent(){
		logger.info("spring异步事件处理!!!");
		Coupon coupon = new Coupon();
		coupon.setCode("ZB-191219324716690");
		coupon.setUserIds(Arrays.asList("137", "876"));
		SpringContextHolder.publishEvent(new CouponEvent(coupon));
		return "处理成功";
	}

	/**
	 * guava异步处理事件测试
	 * @return
	 */
	@RequestMapping(value = "/guava/asyn" ,method = RequestMethod.GET)
	public String guavaAsyn(){
		logger.info("guava异步事件处理!!!");
		InitEvent initEvent = new InitEvent();
		initEvent.setUserId("0989787");
		initEvent.setUserLevelInterestsBody("AccessToken");
		asyncEventBus.post(initEvent);
		return "处理成功";
	}
}
