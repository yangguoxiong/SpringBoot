package com.movit.utils;


import org.apache.commons.lang.StringUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Mark on 2019/12/4 17:06.
 */
public class StringBuilderTest {
    public static void main(String[] args) {
        testBuilder();
    }


    private static void testBuilder() {
        List<String> list = new ArrayList<String>(16);
        list.add("A");
        list.add("");
        list.add("B");
        list.add("C");
        StringBuilder sb = new StringBuilder();
        for (String str : list) {
            if (StringUtils.isNotBlank(str)) {
                if (sb.length() > 0) {
                    //判断是否有元素,如果有,先拼接","
                    sb.append(",");
                }
                //再拼接内容
                sb.append(str);
            }
        }
        System.out.println(sb);
    }

}
