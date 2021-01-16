package com.movit.utils;

import com.movit.design.factory.AbstractFactory;
import com.movit.design.factory.CoffeeFactory;

/**
 * @author: yangguoxiong
 * @date: 2021/1/12 12:48
 * @description:
 */
public class FactoryTest {

    public static void main(String[] args) {
        // 定义抽象类.子类继承抽象类
        // 抽象类可以定义普通方法,子类都可以继承这个方法,可以作为公共方法给多个子类使用.
        // 子类也可以重写父类的普通方法
        AbstractFactory factory = new CoffeeFactory();
        System.out.println(factory.get());
    }
}
