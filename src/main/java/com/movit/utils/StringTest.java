package com.movit.utils;

import cn.hutool.core.util.NumberUtil;
import com.duizhuang.common.cache.redis.JsonUtil;
import com.fasterxml.jackson.core.type.TypeReference;
import com.google.common.base.Joiner;
import com.google.common.collect.Lists;
import org.apache.commons.lang.StringUtils;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

import java.text.DecimalFormat;
import java.util.*;

/**
 * Created by Mark on 2020/9/23 11:12.
 */
public class StringTest {

    public static void main(String[] args) {
        // test01();
        // test02();
        // test03();
        // test04();
        // test05();
        // test06();
        // test07();
        // test08();
        // test09();
        // test10();
        // test11();
        // test12();
        test13();
    }

    /**
     * 测试StringBuilder和StringBuffer
     */
    private static void test13() {
        // StringBuilder,线程不安全
        // StringBuffer,线程安全,他的方法加了sync关键字
        StringBuffer builder = new StringBuffer();
        for (int i = 0; i < 10; i++) {
            new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    builder.append("a");
                }
            }).start();
        }
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // 用StringBuilder,打印结果不会一直等于10000
        // 用StringBuffer,打印结果始终是10000
        System.out.print("线程是否安全:" + builder.length());


    }

    private static void test12() {
        // 用guava的joiner测试
        List<String> list = Arrays.asList("a", "b", "c");
        StringBuilder errorMsg = new StringBuilder();
        errorMsg.append("公告内容包含了【");
        errorMsg.append(Joiner.on("】【").join(list));
        errorMsg.append("】请修改后发布");
        System.out.println(errorMsg);
    }

    private static void test11() {
        // joiner测试
        StringJoiner joiner = new StringJoiner(",");
        System.out.println(joiner.length());
    }

    private static void test10() {
        StringBuilder filter = new StringBuilder();
        List<Long> dynamicIdList = Lists.newArrayList();
        dynamicIdList.add(10L);
        dynamicIdList.add(20L);
        dynamicIdList.add(30L);
        for (Long dynamicId : dynamicIdList) {
            filter.append(" ANDNOT dynamic_id:'").append(dynamicId).append("'");
        }
        System.out.println(filter);
    }

    private static void test09() {
        String content = "在\"吗";
        content = org.apache.commons.lang3.StringUtils.trimToEmpty(content.replace("\"", "\\" + "\""));
        System.out.println(content);
    }

    private static void test01() {
        // 双重for循环,里面的break只是跳出里面的for循环
        for (int i = 0; i < 3; i++) {
            System.out.println("外面i: " + i);
            for (int i1 = 0; i1 < 3; i1++) {
                System.out.println("里面i: " + i1);
                if (i1 == 1) {
                    break;
                }
            }
        }
    }

    private static void test02() {
        // Whitelist.simpleText(): "b", "em", "i", "strong", "u"这几个标签不过滤.其他都过滤.
        // Whitelist.none(): 所有标签都会过滤,只保留文本.
        String address = Jsoup.clean("<span style='color:red'><a href='https://www.baidu.com'>百度地址</a> -- <strong>strong标签</strong> 动态详情的世袭.</span>", Whitelist.simpleText());
        System.out.println("过滤html代码后: " + address);
    }

    private static void test03() {
        String test = "/gemImg/2018-06/08/51f3855360cbc3473bd8a64118213f40.origin.jpg,800,800,532903";
        String regex = ",";
        String[] split = test.split(regex);
        if (split != null && split.length > 0) {
            String url = split[0];
            System.out.println(url);
        }

        Map<String, Object> expandMap = JsonUtil.readValue("{\"from\": \"飙升榜\"}", new TypeReference<Map<String, Object>>() {
        });
        if (StringUtils.isNotBlank(String.valueOf(expandMap.get("from1")))) {
            System.out.println(expandMap.get("from1"));
        }

        List<String> list = new ArrayList<>();
        list.add("tt");
        list.add("dd");
        list.add("gg");
        System.out.println(list.get(1));
    }

    private static void test04() {
        String content = "自觉浮想mark详细";
        boolean contains = StringUtils.contains(content, "rk");
        System.out.println("匹配结果: " + contains);
    }

    private static void test05() {
        String content = "#自觉浮想#详细";
        content = StringUtils.replace(content, "#", "");
        System.out.println("过滤后结果: " + content);
    }

    private static void test06() {
        // 将"方法"替换%s
        String format = String.format("*%s*", "方法");
        System.out.println(format); // 输出后结果: *方法*
    }

    private static void test07() {
        String color = "#E8E8E8E8";
        StringBuilder sb = new StringBuilder();
        sb.append("rgba(");

        String color1 = color.substring(3, 5);
        Integer color1Int = Integer.valueOf(color1, 16);
        sb.append(color1Int).append(", ");

        String color2 = color.substring(5, 7);
        Integer color2Int = Integer.valueOf(color2, 16);
        sb.append(color2Int).append(", ");

        String color3 = color.substring(7, 9);
        Integer color3Int = Integer.valueOf(color3, 16);
        sb.append(color3Int).append(", ");

        String alp = color.substring(1, 3);
        Integer alpInt = Integer.valueOf(alp, 16);
        DecimalFormat df = new DecimalFormat("0.00");
        String str = df.format(Double.valueOf(alpInt) / 255);
        // 透明度
        sb.append(str).append(")");
        System.out.println(sb);
    }

    private static void test08() {
        String color = "rgba(231, 21, 21, 0.94)";
        String substring = color.substring(color.indexOf("(") + 1, color.indexOf(")"));
        String[] split = substring.split(", ");
        if (split == null || split.length <= 0) {
            return;
        }
        StringBuilder sb = new StringBuilder();
        sb.append("#");
        // 先处理头两位的透明度
        String opaque = split[split.length - 1];
        if (StringUtils.isEmpty(opaque)) {
            return;
        }
        double opaDouble = Double.valueOf(opaque);
        // 透明度 * 255 -> 四舍五入 -> 转成16进制
        Integer opa10 = Math.toIntExact(Math.round(opaDouble * 255));
        String opa16 = opa10.toHexString(opa10).toUpperCase();
        sb.append(opa16);
        for (int i = 0; i < split.length - 1; i++) {
            String rgba = split[i];
            if (StringUtils.isEmpty(rgba)) {
                break;
            }
            Integer rgba10 = NumberUtil.parseInt(rgba);
            String rgba16 = rgba10.toHexString(rgba10).toUpperCase();
            sb.append(rgba16);
        }
        System.out.println(sb);
    }
}
