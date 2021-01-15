package com.movit.proxy;

/**
 * @author: yangguoxiong
 * @date: 2021/1/15 14:09
 * @description: 普通用户执行类
 */
public class UserServiceImpl implements UserService {

    @Override
    public String editName(String name) {
        System.out.println("执行普通方法");
        return "普通: " + name;
    }

}
