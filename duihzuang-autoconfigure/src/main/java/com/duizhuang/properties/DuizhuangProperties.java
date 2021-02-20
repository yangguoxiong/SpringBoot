package com.duizhuang.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * @author: yangguoxiong
 * @date: 2021/2/20 11:44
 * @description:
 */
@ConfigurationProperties(prefix = "duizhuang") // 属性配置项, 以duizhuang开头
public class DuizhuangProperties {

    private String companyName;

    private String address;

    private String phone;

    public String getCompanyName() {
        return this.companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
