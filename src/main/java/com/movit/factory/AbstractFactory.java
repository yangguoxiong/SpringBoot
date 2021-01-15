package com.movit.factory;

/**
 * @author: yangguoxiong
 * @date: 2021/1/12 12:51
 * @description:
 */
public abstract class AbstractFactory {

    public abstract String get();

    public String base() {
        return "公共方法";
    }
}
