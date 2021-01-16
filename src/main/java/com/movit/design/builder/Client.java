package com.movit.design.builder;

/**
 * @author: yangguoxiong
 * @date: 2021/1/16 17:55
 * @description:
 */
public class Client {

    public static void main(String[] args) {
        // 建造者模式
        // 链式编程
        Phone phone = Builder.getInstance()
                .cpu("骁龙865")
                .screen("京东方屏幕")
                .camera("莱卡四摄")
                .build();
        System.out.println("建造者模式构建出来的phone对象: " + phone);
    }
}
