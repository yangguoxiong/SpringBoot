package com.movit.event;

import cn.hutool.core.util.ObjectUtil;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * spring上下文工厂方法
 */
@Component
public class SpringContextHolder implements ApplicationContextAware {

    private static ApplicationContext applicationContext;

    /**
     * 重写方法.获得spring容器的上下文对象
     *
     * @param applicationContext
     * @throws BeansException
     */
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        System.out.println("初始化获得spring上下文对象");
        this.applicationContext = applicationContext;
    }

    /**
     * 定义发布异步事件的方法
     *
     * @param event
     */
    public static void publishEvent(Object event) {
        if (ObjectUtil.isNull(applicationContext)) {
            return;
        }
        applicationContext.publishEvent(event);
    }
}
