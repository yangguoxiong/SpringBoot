package com.movit.design.singleton;

import cn.hutool.core.util.ReflectUtil;
import lombok.extern.slf4j.Slf4j;

import java.io.Serializable;

/**
 * @author: yangguoxiong
 * @date: 2021/1/12 14:01
 * @description:
 */
@Slf4j
public class Singleton implements Serializable {

    private static final long serialVersionUID = -3362280329374572828L;

    // 自己定义单例对象
    private static volatile Singleton INSTANCE; // 加上volatile关键字, 用来确保将变量的更新操作通知到其他线程

    // 定义双重锁获取单例对象
    public static Singleton getSingletonByLock() {
        if (null == INSTANCE) {
            synchronized (Singleton.class) {
                if (null == INSTANCE) {
                    INSTANCE = new Singleton();
                }
            }
        }
        return INSTANCE;
    }

    /**
     * 私有构造方法
     */
    private Singleton() {
        log.info("构造方法执行");
    }

    /**
     * 使用糊涂工具包获取单例对象
     * 源码: ReflectUtil.newInstance(clazz, params);
     * 通过反射的方式获得. 但是反射之前还做了双重锁校验.
     * 反射时, 还校验了是否是私有构造方法
     * 如果是, 把构造方法改为了可以访问: constructor.setAccessible(true);
     *
     * @return
     */
    public static Singleton getInstance() {
        return cn.hutool.core.lang.Singleton.get(Singleton.class);
    }

    public static void main(String[] args) {
        Singleton instance = Singleton.getInstance();
        Singleton singletonByLock = Singleton.getSingletonByLock();
        System.out.println(instance == singletonByLock); // 输出false

        Singleton instance2 = Singleton.getInstance();
        System.out.println(instance == instance2); // 输出true

        Singleton singletonByLock2 = Singleton.getSingletonByLock();
        System.out.println(singletonByLock == singletonByLock2); // 输出true


        // 使用反射破坏单例模式
        Singleton singleton = ReflectUtil.newInstance(Singleton.class, null);
        Singleton singleton2 = ReflectUtil.newInstance(Singleton.class, null);
        System.out.println(singleton == singleton2); // 输出false
    }

}
