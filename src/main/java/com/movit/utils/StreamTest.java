package com.movit.utils;


import lombok.Data;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/**
 * @Author: yangguoxiong
 * @Date: 2019/12/25
 */
@Data
public class StreamTest {

    private Short TT;
    private static final Short TT_TT = 999;

    public static void main(String[] args) {
        // 测试integerStream
        //testIntegerStream();
        // 测试字符串
        //testString();
    	//test1();
    	//test2();
        test3();
    }

    private static void testString() {
        String jfStr = "JF-999";
        // 此方式不需要做jfStr的非空判断
        System.out.println(StringUtils.startsWith(jfStr, "JF"));
    }

    /**
     * int sum = list.stream().map(Person::getAge).reduce(0, Integer::sum); 计算元素总和的方法其中暗含了装箱成本，map(Person::getAge)
     * 方法过后流变成了 Stream 类型，而每个 Integer 都要拆箱成一个原始类型再进行 sum 方法求和，这样大大影响了效率。
     * 针对这个问题 Java 8 有良心地引入了数值流: IntStream, DoubleStream, LongStream，这种流中的元素都是原始数据类型，分别是 int，double，long
     */
    private static void testIntegerStream() {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);
        //流获取索引,使用IntStream这个数值流对象.
        List<String> collect = IntStream.range(0, list.size())
                .mapToObj(i -> {
                    if (list.get(i) > 3) {
                        return "大于三";
                    }
                    return "小雨伞";
                }).collect(Collectors.toList());
        //打印
        System.out.println(collect);
    }
    
    /**
     * 比较最大值
     */
    public static void test1() {
        List<Integer> list = Arrays.asList(10, 20, 30, 40, 50, 60, 70, 80, 900, 100);
 
        //调用 stream 里的 min 或 max 函数得到最大值或最小值。
        System.out.println("stream()的方法来取得最大最小值");
        //int max = list.stream().filter(e -> e != null).max(Comparator.naturalOrder()).orElse(null);
        // 也可以使用下面的方式
        int max = list.stream()
        		.filter(e -> e != null)
        		.mapToInt(e -> e)
                .max().getAsInt();
        System.out.println("max=" + max);
        int min = list.stream().filter(e -> e != null).min(Comparator.naturalOrder()).orElse(null);
        System.out.println("min=" + min);
 
 
        System.out.println("使用Collections类的方法来取得最大最小值");
        //使用Collections
        System.out.println("max=" + Collections.max(list));
        System.out.println("min=" + Collections.min(list));
 
    }
 
    /**
     * 比较最大值
     */
    public static void test2() {
        List<Long> list = Arrays.asList();
 
        //什么时候会执行orElse()呢？ 当数组为空的时候，就会执行。
        System.out.println("测试orElse()");
        long max = list.stream().filter(e -> e != null).max(Comparator.naturalOrder()).orElse(new Date().getTime());
        System.out.println("max=" + max);
        long min = list.stream().filter(e -> e != null).min(Comparator.naturalOrder()).orElse((long) 0);
        System.out.println("min=" + min);
 
 
    }

    /**
     * filter过滤了所有数据,或者测试空集合的情况
     */
    private static void test3() {
        List<String> list = Arrays.asList("6", "90");
        Integer orElse = list.stream()
                .filter(str -> NumberUtils.isNumber(str))
                .map(str -> Integer.parseInt(str))
                .filter(st -> st == 0)
                .max(Comparator.naturalOrder())
                .orElse(19);
        System.out.println(orElse);
    }

}
