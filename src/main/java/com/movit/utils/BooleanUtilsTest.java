package com.movit.utils;

import org.apache.commons.lang3.BooleanUtils;

/**
 * @author: yangguoxiong
 * @date: 2021/1/7 10:08
 * @description:
 */
public class BooleanUtilsTest {

    public static void main(String[] args) {
        // 传入null不会报错空指针.
        System.out.println(BooleanUtils.isTrue(null));
    }
}
