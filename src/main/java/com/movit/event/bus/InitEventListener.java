package com.movit.event.bus;

import com.google.common.eventbus.AsyncEventBus;
import com.google.common.eventbus.Subscribe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

/**
 * 异步事件处理类
 */
@Component
public class InitEventListener {

    @Autowired
    private AsyncEventBus asyncEventBus;

    // 注册这个监听器
    @PostConstruct
    public void register() {
        System.out.println("注册了监听事件的方法");
        asyncEventBus.register(this);
    }

    @Subscribe
    public void initHandle(InitEvent initEvent) {
        System.out.println("异步处理用户id: " + initEvent.getUserId());
    }
}
