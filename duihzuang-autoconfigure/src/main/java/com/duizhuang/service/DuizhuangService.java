package com.duizhuang.service;

import com.duizhuang.properties.DuizhuangProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import java.util.Objects;

/**
 * @author: yangguoxiong
 * @date: 2021/2/20 11:48
 * @description:
 */
public class DuizhuangService {

    @Autowired
    private DuizhuangProperties duizhuangProperties;

    public String getCompany(String name) {
        if (StringUtils.isEmpty(name)) {
            return null;
        }
        if (name.equals(duizhuangProperties.getCompanyName())) {
            return null;
        }
        return name + "的联系方式: " + duizhuangProperties.getPhone() + " 联系地址: " + duizhuangProperties.getAddress();
    }
}
