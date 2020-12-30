package com.movit.utils;

import okhttp3.*;
import org.apache.commons.collections4.MapUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * Title: Http请求方式
 * Description: 手动生成
 */
public class HttpUtils {

    private final static Logger logger = LoggerFactory.getLogger(HttpUtils.class);

    private final static OkHttpClient client = new OkHttpClient().newBuilder().
            connectTimeout(60000, TimeUnit.MILLISECONDS).readTimeout(60000, TimeUnit.MILLISECONDS).build();

    public static String get(String url) {
        Request request = new Request.Builder().url(url).build();
        return get(request);
    }

    public static String get(Request request) {
        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                return response.body().string();
            }
            if (logger.isDebugEnabled()) {
                logger.debug(response.body().string());
            }
        } catch (IOException e) {
            logger.error("请求失败:{}", e);
        }
        return null;
    }


    public static String postJson(String url, String json) {
        MediaType JSON = MediaType.parse("application/json; charset=utf-8");
        RequestBody requestBody = RequestBody.create(JSON, json);
        Request request = new Request.Builder().url(url).post(requestBody)
                .build();
        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                return response.body().string();
            }
        } catch (IOException e) {
            logger.error("请求失败:{}", e);
        }
        return null;
    }

    public static String postForm(String url, Map<String, Object> params) {
        FormBody.Builder builder = new FormBody.Builder();
        if (MapUtils.isNotEmpty(params)) {
            for (Map.Entry<String, Object> entry : params.entrySet()) {
                Object value = entry.getValue();
                if (value != null) {
                    builder.add(entry.getKey(), value.toString());
                }
            }
        }
        Request request = new Request.Builder().url(url).post(builder.build()).build();
        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                return response.body().string();
            }
        } catch (IOException e) {
            logger.error("请求失败:{}", e);
        }
        return null;
    }

    public static void main(String[] args) {
        // 直接封装请求即可
        String response = HttpUtils.get("http://localhost:33360/os/total");
        System.out.println(response);
    }

}
