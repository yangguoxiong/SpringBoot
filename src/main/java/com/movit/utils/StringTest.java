package com.movit.utils;

import com.duizhuang.common.cache.redis.JsonUtil;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.lang.StringUtils;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by Mark on 2020/9/23 11:12.
 */
public class StringTest {

    public static void main(String[] args) {
        // test01();
        test02();
        // test03();
        // test04();
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
}
