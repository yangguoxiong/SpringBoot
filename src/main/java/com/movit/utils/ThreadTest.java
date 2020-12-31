package com.movit.utils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

//创建线程方式一:继承Thread类
public class ThreadTest extends Thread {

    @Override
    public void run() {
        System.out.println(this.getName() + ": 执行了方式一的run方法");
    }

    public static void main(String[] args) {
        ThreadTest threadTest = new ThreadTest();
        ///start方法是一个native方法,他将启动一个新线程,并执行run方法
        threadTest.start();
    }
}

//创建线程方式二:实现Runnable接口,重写run方法
class ThreadTest2 implements Runnable {

    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + ": 执行了方式二的run方法");
    }

    public static void main(String[] args) {
        ThreadTest2 test2 = new ThreadTest2();
        //创建Thread类,传入参数,后面一个参数是线程名字
        Thread thread = new Thread(test2, "线程2");
        thread.start();
    }
}

//创建线程方式三:实现Callable接口,重写call方法
class ThreadTest3 implements Callable<LocalDate> {
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    @Override
    public LocalDate call() throws Exception {
        return LocalDate.parse("2019-12-12", dtf);
    }
}

//多线程共享数据
class ThreadTest4 implements Runnable {

    private int count = 10;

    @Override
    public void run() {

        while (true) {
            if (count > 0) {
                System.out.println(Thread.currentThread().getName() + ": 还剩 " + count + "张票");
                try {
                    Thread.sleep(30);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                count--;
            } else {
                break;
            }
        }
    }

    public static void main(String[] args) {
        ThreadTest4 test4 = new ThreadTest4();
        new Thread(test4).start();
        new Thread(test4).start();
    }
}

/**
 * 开启多线程
 */
class MultipleThread {

    public static void main(String[] args) throws Exception {
        //开启10个线程
        ExecutorService pool = Executors.newFixedThreadPool(10);
        //存入list
        List<Future<LocalDate>> list = new ArrayList<Future<LocalDate>>();
        for (int i = 0; i < 10; i++) {
            list.add(pool.submit(new ThreadTest3()));
        }
        //遍历
        for (Future<LocalDate> dateFuture : list) {
            System.out.println(dateFuture.get());
        }
        pool.shutdown();
    }
}