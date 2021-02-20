package com.movit.event.bus;

import com.google.common.eventbus.AsyncEventBus;
import com.google.common.eventbus.Subscribe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * 异步事件处理类
 */
@Component
public class InitEventListener implements CommandLineRunner {

    @Autowired
    private AsyncEventBus asyncEventBus;

    /**
     * 方式一: 使用PostConstrct注解,当spring容器启动完成后,注册这个监听器
     */
    /*@PostConstruct
    public void register() {
        System.out.println("注册了监听事件的方法");
        asyncEventBus.register(this);
    }*/

    /**
     * 方式二: 实现CommandLineRunner接口,重写run方法.当springboot项目启动完成之后,就会调用这个run方法.此时再来注册这个监听器也是可以的.
     *
     * @param args
     * @throws Exception
     */
    @Override
    public void run(String... args) throws Exception {
        System.out.println("注册了监听事件的方法");
        asyncEventBus.register(this);
    }

    @Subscribe
    public void initHandle(InitEvent initEvent) {
        System.out.println("异步处理用户id: " + initEvent.getUserId());
    }
}
