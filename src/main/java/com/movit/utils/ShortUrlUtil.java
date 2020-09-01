package com.movit.utils;

import com.duizhuang.common.cache.redis.JsonUtil;
import org.apache.http.client.fluent.Form;
import org.apache.http.client.fluent.Request;

import java.math.BigDecimal;

/**
 * 短链接工具类
 */
public class ShortUrlUtil {
    private final static org.slf4j.Logger logger = org.slf4j.LoggerFactory.getLogger(ShortUrlUtil.class);

    //5秒的连接超时
    private static final int DEFAULT_TIME_OUT = 5 * 1000;

    /**
     * 创建短链接，如果创建失败，返回原来的链接
     * 如果是同一个地址重复执行创建短链接,是返回相同的短链接url
     *
     * @param originUrl 原链接
     * @return 短链接
     */
    public static String createShortUrl(String originUrl) {
        String url = originUrl;
        // createShortUrl表示:创建好的短链接是以http://dz8.cn/开头,再拼接后面的链接
        String createShortUrl = "http://dz8.cn/create";
        try {
            String json = Request.Post(createShortUrl)
                    .bodyForm(Form.form().add("url", url).build())
                    .connectTimeout(DEFAULT_TIME_OUT)
                    .execute().returnContent().asString();
            java.util.Map<String, Object> result = JsonUtil.readValue(json, java.util.Map.class);

            if (result.containsKey("status") && org.apache.commons.lang.StringUtils.equals(result.get("status").toString(), "0")) {
                return result.get("tinyurl").toString();
            } else {
                logger.error("生成短链接失败:" + createShortUrl + "json:" + result, "");
            }
        } catch (Exception e) {
            logger.error("生成短链接失败:" + createShortUrl, e);
        }
        return url;
    }

    /*public static void main(String[] args) {
        //System.out.println(ShortUrlUtil.createShortUrl("http://www.baidu.com"));

    }*/

    public static void main(String[] args) {
        BigDecimal decimal = new BigDecimal("10000");
        BigDecimal a = decimal;
        if (a.compareTo(decimal) >= 0) {
            BigDecimal b = a.divide(decimal, 2, BigDecimal.ROUND_HALF_UP);
            System.out.printf(b.toString());
        }
    }
}
