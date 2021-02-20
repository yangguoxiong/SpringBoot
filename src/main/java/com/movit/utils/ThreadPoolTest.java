package com.movit.utils;

import com.google.common.util.concurrent.ListeningExecutorService;
import com.google.common.util.concurrent.MoreExecutors;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.concurrent.BasicThreadFactory;

import java.util.concurrent.*;

/**
 * @author: yangguoxiong
 * @date: 2021/2/20 11:06
 * @description: 线程池创建方式
 */
public class ThreadPoolTest {

    /**
     * 方式一:
     * 阿里不建议用Executors来创建线程池
     * 建议使用ThreadPoolExecutor来创建
     */
    private final static ExecutorService executorService = new ThreadPoolExecutor(
            20, // 核心线程数20个
            20, // 最大线程数20个
            30, // 空闲回收时间30秒
            TimeUnit.SECONDS,
            new ArrayBlockingQueue<>(500),
            new ThreadPoolExecutor.AbortPolicy());

    /**
     * 方式二:
     * 使用guava的创建线程池方式
     */
    private final static ListeningExecutorService guavaExecutorService = MoreExecutors.listeningDecorator(new ScheduledThreadPoolExecutor(20,
            new BasicThreadFactory.Builder().namingPattern("test-multithreading-schedule-pool-%d").daemon(true).build()));

    public static void main(String[] args) {
        try {
            executorService.submit(new ThreadPoolExecutorThread("executorService"));
            guavaExecutorService.submit(new ThreadPoolExecutorThread("guavaExecutorService"));
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // main方法如果不释放线程池资源,方法不会终止.真实使用不需要释放资源
            executorService.shutdown();
            guavaExecutorService.shutdown();
        }
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    static class ThreadPoolExecutorThread implements Callable<String> {

        private String type;

        @Override
        public String call() throws Exception {
            System.out.println("运行的是从 " + type + " 线程池中获取的线程");
            return "线程执行完成";
        }
    }
}
