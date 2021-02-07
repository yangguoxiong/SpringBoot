package com.movit.utils;

import java.util.HashSet;
import java.util.Set;

/**
 * @author: yangguoxiong
 * @date: 2021/1/20 16:09
 * @description:
 */
public class SetTest {

    public static void main(String[] args) {
        Set<String> result = new HashSet<String>();
        Set<String> set1 = new HashSet<String>() {
            {
                add("王者荣耀");
                add("英雄联盟");
                add("穿越火线");
                add("地下城与勇士");
            }
        };
        Set<String> set2 = new HashSet<String>() {
            {
                add("王者荣耀");
                add("地下城与勇士");
                add("魔兽世界");
            }
        };
        result.clear();
        result.addAll(null);
        System.out.println("交集：" + result);
    }
}
