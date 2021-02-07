package com.movit.utils;

import com.google.common.collect.Lists;
import com.movit.event.Coupon;

import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

/**
 * @author: yangguoxiong
 * @date: 2021/1/27 9:20
 * @description:
 */
public class IteratorTest implements Iterable<Coupon> {

    /**
     * final修饰list和map, 表示不可以重新new新的对象去赋值给原来的list或map, 但是可以给list或map内部添加值, 可以使用.add或.put方法.
     * final修饰的是list和map的引用, 而不是内容
     */
    private final List<Coupon> couponList = Lists.newArrayList();

    public void add(Coupon coupon) {
        this.couponList.add(coupon);
    }

    public void remove(Coupon coupon) {
        this.couponList.remove(coupon);
    }

    /**
     * 实现Iterable, 重写iterator方法, 则可以使用增强for
     *
     * @return
     */
    @Override
    public Iterator<Coupon> iterator() {
        return couponList.iterator();
    }

    public static void main(String[] args) {
        IteratorTest iteratorTest = new IteratorTest();
        iteratorTest.add(new Coupon("444", Arrays.asList("oh")));
        iteratorTest.add(new Coupon("555", Arrays.asList("my")));
        iteratorTest.add(new Coupon("666", Arrays.asList("god")));
        for (Coupon coupon : iteratorTest) {
            System.out.println(coupon);
        }
    }
}
