package com.movit.utils;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.net.URL;

/**
 * 测试Jsoup网络请求工具
 */
public class JsoupTest {

    public static void main(String[] args) throws IOException {
        // 发送http请求获取网页的html代码
        String keyword = "java";
        Document parse = Jsoup.parse(new URL("https://search.jd.com/Search?keyword=" + keyword), 3000);
        Element goodsList = parse.getElementById("J_goodsList");
        Elements lis = parse.getElementsByTag("li");
        for (Element element : lis) {

        }
        System.out.println(goodsList.html());
    }
}
