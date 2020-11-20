package com.movit.utils;

import cn.hutool.core.util.NumberUtil;

/**
 * Created by Mark on 2020/11/18 18:03.
 */
public class HexTest {

    public static void main(String[] args) {
        encodeHEX(9);
    }

    // 將10進制轉換為16進制
    public static void encodeHEX(Integer numb){
        Integer x = 186;
        String hex = x.toHexString(x).toUpperCase();
        System.out.println(hex);
        Integer y = Math.toIntExact(Math.round(0.8 * 255));
        String toUpperCase = y.toHexString(y).toUpperCase();
        System.out.println(toUpperCase);
    }

}
