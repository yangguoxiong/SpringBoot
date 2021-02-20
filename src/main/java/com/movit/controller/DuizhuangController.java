package com.movit.controller;

import com.duizhuang.service.DuizhuangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * @author: yangguoxiong
 * @date: 2021/2/20 12:33
 * @description:
 */
@RestController
public class DuizhuangController {

    @Autowired
    private DuizhuangService duizhuangService;

    @GetMapping("/company")
    public String getCompany(HttpServletRequest request, String name) {
        String info = duizhuangService.getCompany(name);
        return info;
    }
}
