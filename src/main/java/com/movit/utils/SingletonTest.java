package com.movit.utils;

import cn.hutool.core.lang.Singleton;
import com.alibaba.fastjson.JSONObject;
import com.movit.event.Coupon;
import lombok.ToString;
import org.apache.commons.math3.analysis.function.Sin;

import java.util.Arrays;

/**
 * @author: yangguoxiong
 * @date: 2021/1/25 13:45
 * @description:
 */
@ToString
public class SingletonTest {
    private JSONObject coupon;

    public static SingletonTest getInstance() {
        SingletonTest sing = Singleton.get(SingletonTest.class);
        sing.coupon = new JSONObject();
        return sing;
    }

    public static void main(String[] args) {
        SingletonTest instance = SingletonTest.getInstance();
        instance.coupon.put("name", "lory");
        getTest(instance);
        System.out.println(instance.coupon);
        getTest02(instance.coupon);
    }

    private static void getTest02(JSONObject coupon) {
        SingletonTest instance = SingletonTest.getInstance();
        System.out.println(instance.coupon);
        System.out.println(instance.coupon == coupon);
    }

    private static void getTest(SingletonTest instance) {
        instance.coupon.put("name", "mark");
    }
}
