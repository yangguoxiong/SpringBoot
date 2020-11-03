package com.movit.utils;

import cn.hutool.core.util.ObjectUtil;
import com.duizhuang.common.cache.redis.JsonUtil;
import org.apache.commons.lang3.tuple.Pair;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

/**
 * 测试异步执行任务CompletableFutureTest
 * 另一种异步执行方法可以参考:FeatureTask
 */
public class CompletableFutureTest {

    public static void main(String[] args) {
        CompletableFuture<Pair<List<String>, Account>> future = CompletableFuture.supplyAsync(() -> {
            // 异步开启另外的线程执行此代码
            // 先休眠3秒,看主线程走完后.还能不能拿到此处代码(如果主线程直接用isDone()获取,是拿不到里此处代码.只有用get()方法才是线程阻塞,才可以拿到0
            try {
                Thread.sleep(3000L);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            List<String> list = Arrays.asList("mark", "lori");
            Account account = new Account(18);
            account.setSort(80);
            return Pair.of(list, account);
        });

        System.out.println(" 主线程在执行。。。。。");

        try {
            // 这里使用get(),是线程阻塞的.表示只有执行完CompletableFuture的代码,也就是CompletableFuture执行完成之后,才会走下一步.
            Pair<List<String>, Account> pair = future.get(5, TimeUnit.SECONDS); // 如果3秒获取不到数据,则抛异常TimeoutException
            if (ObjectUtil.isNotNull(pair)) {
                System.out.println("异步线程获取数据中。。。");
                List<String> left = pair.getLeft();
                System.out.println("Pair左侧的值： " + JsonUtil.toJSon(left));
                Account right = pair.getRight();
                System.out.println("Pair右侧的值： " + JsonUtil.toJSon(right));
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("CompletableFuture执行报错。。。");
        }
    }
}
