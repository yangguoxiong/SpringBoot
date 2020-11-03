package com.movit.event.bus;

import com.google.common.eventbus.AsyncEventBus;
import com.google.common.eventbus.EventBus;
import com.google.common.util.concurrent.ListeningExecutorService;
import com.google.common.util.concurrent.MoreExecutors;
import org.apache.commons.lang3.concurrent.BasicThreadFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.ScheduledThreadPoolExecutor;

/**
 * 事件总线工具类
 */
@Configuration
public class EventContextHolder {

    private ListeningExecutorService executorService = MoreExecutors.listeningDecorator(new ScheduledThreadPoolExecutor(100,
            new BasicThreadFactory.Builder().namingPattern("async-event-bus-pool-%d").daemon(true).build()));

    @Bean
    public AsyncEventBus asyncEventBus() {
        return new AsyncEventBus(executorService);
    }

    @Bean
    public EventBus eventBus() {
        return new EventBus();
    }
}