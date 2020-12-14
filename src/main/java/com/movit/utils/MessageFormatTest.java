package com.movit.utils;

import java.text.MessageFormat;

/**
 * 测试字符串多个替换方法
 */
public class MessageFormatTest {

    public static void main(String[] args) {
        test01();
    }

    private static void test01() {
        System.out.println(MessageFormat.format("{1}的年龄是: {0}", 18, "mark"));
    }
}
