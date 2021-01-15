package com.movit.factory;

/**
 * @author: yangguoxiong
 * @date: 2021/1/12 12:51
 * @description:
 */
public class CoffeeFactory extends AbstractFactory {

    @Override
    public String get() {
        return this.base();
    }

    @Override
    public String base() {
        System.out.println("多走了子类的base方法");
        return super.base();
    }
}
