package com.movit.design.proxy.jdk;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

/**
 * @author: yangguoxiong
 * @date: 2021/1/15 14:13
 * @description:
 */
public class UserProxyFactory {

    /**
     * 定义获取动态代理方法
     * 使用泛型方式, 传递具体对象类型, 返回接口对象, 多态.
     */
    public static <T> T getProxy(T target) {

        /**
         * object: 真实实现对象
         * method: 正在执行的方法
         * args: 方法参数
         */

        // 用lambda表达式写法
        /*T proxyInstance = (T) Proxy.newProxyInstance(target.getClass().getClassLoader(), target.getClass().getInterfaces(), (object, method, args) -> {
            System.out.println("执行动态代理");
            Object invoke = method.invoke(target, args);
            System.out.println("执行后的处理动作");
            return invoke;
        });*/

        // 当前线程来获得类加载器
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        // 用匿名内部类方法
        T proxyInstance = (T) Proxy.newProxyInstance(classLoader, target.getClass().getInterfaces(), new InvocationHandler() {
            @Override
            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                System.out.println("执行动态代理。。。。。。");
                Object invoke = method.invoke(target, args);
                System.out.println("执行后的处理动作。。。。");
                return invoke;
            }
        });

        return proxyInstance;
    }
}
