package com.movit.utils;

import cn.hutool.core.util.ObjectUtil;
import com.duizhuang.common.cache.redis.JsonUtil;
import com.google.common.util.concurrent.ListeningExecutorService;
import com.google.common.util.concurrent.MoreExecutors;
import org.apache.commons.lang3.concurrent.BasicThreadFactory;
import org.apache.commons.lang3.tuple.Pair;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.FutureTask;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * 测试异步执行任务FeatureTask
 * 另一种异步执行方法可以参考:CompletableFutureTest
 * 原理就是从线程池中取出线程,再异步去执行线程方法.但是主线程是阻塞的.
 */
public class FutureTaskTest {

    // 线程控制
    private static ListeningExecutorService executorService = MoreExecutors.listeningDecorator(new ScheduledThreadPoolExecutor(20,
            new BasicThreadFactory.Builder().namingPattern("advert-schedule-pool-%d").daemon(true).build()));

    public static void main(String[] args) {
        // 创建FeatureTask,在里面异步执行代码
        FutureTask<Pair<List<String>, Account>> futureTask = new FutureTask<>(() -> {
            // 异步开启另外的线程执行此代码
            // 先休眠3秒,看主线程走完后.还能不能拿到此处代码(如果主线程直接用isDone()获取,是拿不到里此处代码.只有用get()方法才是线程阻塞,才可以拿到0
            Thread.sleep(3000L);
            List<String> list = Arrays.asList("mark", "lori");
            Account account = new Account(18);
            account.setSort(80);
            return Pair.of(list, account);
        });
        // 异步开启线程执行
        executorService.submit(futureTask);

        System.out.println(" 主线程在执行。。。。。");

        /*
        try {
            // 此处用isDone方法是不行的.因为isDone还是返回false.
            if (futureTask.isDone()) {
                System.out.printf("异步线程获取数据中。。。");
                Pair<List<String>, Account> pair = futureTask.get();
                List<String> left = pair.getLeft();
                System.out.println("Pair左侧的值： " + JsonUtil.toJSon(left));
                Account right = pair.getRight();
                System.out.println("Pair右侧的值： " + JsonUtil.toJSon(right));
            }
        } catch (Exception e) {
            System.out.println("futureTask执行报错。。。");
        }*/

        try {
            // 这里使用get(),是线程阻塞的.表示只有执行完futureTask的代码,也就是futureTask执行完成之后,才会走下一步.
            // 主线程阻塞.不使用get()主线程就是非阻塞
            Pair<List<String>, Account> pair = futureTask.get(5, TimeUnit.SECONDS); // 如果3秒获取不到数据,则抛异常TimeoutException
            if (ObjectUtil.isNotNull(pair)) {
                System.out.println("异步线程获取数据中。。。");
                List<String> left = pair.getLeft();
                System.out.println("Pair左侧的值： " + JsonUtil.toJSon(left));
                Account right = pair.getRight();
                System.out.println("Pair右侧的值： " + JsonUtil.toJSon(right));
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("futureTask执行报错。。。");
        }
    }
}
