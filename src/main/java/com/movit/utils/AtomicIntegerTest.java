package com.movit.utils;

import java.util.concurrent.atomic.AtomicInteger;

/**
 * 测试java原生类AtomicInteger
 * 说明: 可以做到再高并发情况下,保证原子性操作,非阻塞线程,
 * 参考: https://blog.csdn.net/fanrenxiang/article/details/80623884
 */
public class AtomicIntegerTest {

    private static final int THREADS_COUNT = 20;

    public static AtomicInteger count = new AtomicInteger(0);

    public static void increase() {
        count.incrementAndGet();
    }

    public static void main(String[] args) {
        Thread[] threads = new Thread[THREADS_COUNT];
        for (int i = 0; i < THREADS_COUNT; i++) {
            threads[i] = new Thread(new Runnable() {
                @Override
                public void run() {
                    for (int i = 0; i < 10; i++) {
                        System.out.println("输出结果" + count.get());
                        increase();
                    }
                }
            });
            threads[i].start();
        }

        while (Thread.activeCount() > 1) {
            Thread.yield();
        }

        System.out.println("多线程下自增次数: " + count);
    }

}
