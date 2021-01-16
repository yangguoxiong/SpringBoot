package com.movit.design.proxy.jdk;

/**
 * @author: yangguoxiong
 * @date: 2021/1/15 14:11
 * @description: 后台用户具体实现类
 */
public class AdminUserServiceImpl implements UserService {

    @Override
    public String editName(String name) {
        System.out.println("执行官方方法");
        return "官方: " + name;
    }
}
