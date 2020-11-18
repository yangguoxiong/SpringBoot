package com.movit.utils;

import java.util.concurrent.atomic.AtomicInteger;

/**
 * 测试java原生类AtomicInteger
 */
public class AtomicIntegerTest {


    public static void main(String[] args) {
        int result = test01(2);
        System.out.println(result);
    }


    private static int test01(int modulo) {
        AtomicInteger nextServerCyclicCounter = new AtomicInteger(0);
        int current;
        int next;
        do {
            current = nextServerCyclicCounter.get();
            next = (current + 1) % modulo;
        } while (!nextServerCyclicCounter.compareAndSet(current, next));

        return next;
    }
}
