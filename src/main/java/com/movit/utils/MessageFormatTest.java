package com.movit.utils;

import java.text.MessageFormat;
import java.util.Arrays;
import java.util.List;
import java.util.StringJoiner;

/**
 * 测试字符串多个替换方法
 */
public class MessageFormatTest {

    public static void main(String[] args) {
        test01();
    }

    private static void test01() {
        // 测试StringJoin方法, 使用 "," 拼接list
        StringJoiner sj = new StringJoiner(",");
        List<String> list = Arrays.asList("最", "多", "店", "高级");
        list.stream().forEach(sj::add);
        System.out.println(MessageFormat.format("{1}的年龄是: {0}, 敏感词: {2}", 18, "mark", sj));
        // 输出: mark的年龄是: 18, 敏感词: 最,多,店,高级
    }
}
