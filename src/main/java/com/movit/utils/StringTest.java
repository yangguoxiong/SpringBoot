package com.movit.utils;

import org.apache.commons.collections4.CollectionUtils;

/**
 * Created by Mark on 2020/9/23 11:12.
 */
public class StringTest {

    public static void main(String[] args) {
        String test = "/gemImg/2018-06/08/51f3855360cbc3473bd8a64118213f40.origin.jpg,800,800,532903";
        String regex = ",";
        String[] split = test.split(regex);
        if (split != null && split.length > 0) {
            String url = split[0];
            System.out.println(url);
        }
    }
}
