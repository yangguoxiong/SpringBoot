package com.movit.design.proxy.cglib;

import cn.hutool.core.lang.Singleton;
import net.sf.cglib.proxy.Enhancer;
import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;

import java.lang.reflect.Method;

/**
 * @author: yangguoxiong
 * @date: 2021/1/16 12:36
 * @description: CGLIB动态代理.继承方式.
 */
public class UserCGLIBProxy implements MethodInterceptor {

    /**
     * hutool工具包获取单例对象
     *
     * @return
     */
    public static UserCGLIBProxy getInstance() {
        return Singleton.get(UserCGLIBProxy.class);
    }

    /**
     * 获取代理对象
     *
     * @param clazz 传目标类的class对象,就可以返回目标类对象了.
     * @param <T>   表示在方法中使用泛型的参数,不用整个类去定义泛型
     * @return T 返回值是泛型类型
     */
    public <T> T getProxyObject(Class<T> clazz) {
        Enhancer enhancer = new Enhancer();
        // 设置回调函数
        enhancer.setCallback(this);
        // 设置目标类为父类
        enhancer.setSuperclass(clazz);
        // 创建继承了目标类的子类代理对象
        T proxyObject = (T) enhancer.create();
        return proxyObject;
    }

    /**
     * CGLIB动态代理增强方法
     *
     * @param o           实际对象
     * @param method      实际对象执行的方法
     * @param objects     方法参数
     * @param methodProxy
     * @return
     * @throws Throwable
     */
    @Override
    public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
        System.out.println("CGLIB代理方法中....");
        Object invoke = methodProxy.invokeSuper(o, objects);
        return invoke;
    }
}
