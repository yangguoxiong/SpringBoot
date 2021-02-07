package com.movit.utils;

import com.duizhuang.common.cache.redis.JsonUtil;
import com.fasterxml.jackson.core.type.TypeReference;
import com.google.common.collect.Lists;
import com.movit.event.Coupon;

/**
 * @author: yangguoxiong
 * @date: 2021/1/16 14:11
 * @description: 泛型测试
 */
public class GenericTest {

    public static void main(String[] args) {
        // 传递了两个泛型参数, 方法返回另外的类型
        String type = getType(new UserService(), new Coupon());
        // 返回类型
        // System.out.println(type);
        System.out.println(getTypeT(JsonUtil.toJSon(new Coupon("888", Lists.newArrayList())), Coupon.class));
    }


    /**
     * 定义泛型方法, 返回不是泛型
     *
     * @param target
     * @param source
     * @param <T>    这个定义的目的是为了方法的参数传递泛型,但是类不用定义泛型
     * @param <V>    两个不同类型的泛型
     * @return
     * @return
     */
    public static <T, V> String getType(T target, V source) {
        System.out.println("泛型源对象: " + target.getClass().getName());
        System.out.println("泛型目标对象: " + source.getClass().getName());
        return "方法返回类型不是泛型";
    }

    /**
     * 传递泛型T和V, 返回泛型V
     *
     * @param source
     * @param target
     * @param <T>
     * @param <V>
     * @return
     */
    public static <T, V> V getTypeT(T source, Class<V> target) {
        V v = JsonUtil.readValue(source.toString(), new TypeReference<V>() {
        });
        return v;
    }

}
