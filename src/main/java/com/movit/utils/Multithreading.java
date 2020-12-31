package com.movit.utils;

import com.google.common.util.concurrent.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.concurrent.BasicThreadFactory;

import java.util.concurrent.Callable;
import java.util.concurrent.ScheduledThreadPoolExecutor;

/**
 * @author: yangguoxiong
 * @date: 2020/12/31 14:09
 * @description: 测试创建线程池, 从线程池中拿到线程执行代码
 */
public class Multithreading {

    // 1. 创建线程池,里面有20个线程 注意:namingPattern要指定一个唯一的名字
    private static ListeningExecutorService executorService = MoreExecutors.listeningDecorator(new ScheduledThreadPoolExecutor(20,
            new BasicThreadFactory.Builder().namingPattern("test-multithreading-schedule-pool-%d").daemon(true).build()));

    public static void main(String[] args) {
        test01();
        // 3. 线程池取出线程执行
        ListenableFuture<String> future = executorService.submit(new CouponTest(888L, "新余大礼包"));
        // 4. 可以通过callback方法获取异步执行线程结果
        // 如果写了此回调方法,线程就是阻塞的,也就是说.只有CouponTest的线程走完了返回结果,才会执行test02的方法
        // 如果不写此回调方法,那么主线程是非阻塞的.也就是说会执行完test01和test02后,后面才执行CouponTest线程的方法
        Futures.addCallback(future, new FutureCallback<String>() {
            @Override
            public void onSuccess(String result) {
                System.out.println("异步线程成功结果: " + result);
            }

            @Override
            public void onFailure(Throwable t) {
                System.out.println("异步线程异常: " + t.getMessage());
            }
        });
        test02();
    }

    private static void test01() {
        System.out.println("开始执行");
    }
    private static void test02() {
        System.out.println("执行结束");
    }

    // 2. 创建类实现Runnable接口,重写run方法,也就是异步线程的方法
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    static class CouponTest implements Callable<String> {
        private Long id;
        private String name;

        @Override
        public String call() {
            System.out.println("获取到的id: " + id);
            System.out.println("获取到的name: " + name);
            int i = 10 / 0;
            return "正常";
        }
    }
}
