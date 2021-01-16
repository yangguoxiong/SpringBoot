package com.movit.proxy.cglib;

/**
 * @author: yangguoxiong
 * @date: 2021/1/16 14:09
 * @description: 普通用户执行类
 */
public class UserServiceCGLIB {

    public String editName(String name) {
        System.out.println("执行普通方法");
        return "普通: " + name;
    }

}
