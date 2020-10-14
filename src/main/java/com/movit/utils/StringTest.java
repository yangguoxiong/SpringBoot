package com.movit.utils;

import com.duizhuang.common.cache.redis.JsonUtil;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.lang.StringUtils;

import java.util.Map;

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

        Map<String, Object> expandMap = JsonUtil.readValue("{\"from\": \"飙升榜\"}", new TypeReference<Map<String, Object>>() {
        });
        if (StringUtils.isNotBlank(String.valueOf(expandMap.get("from1")))) {
            System.out.println(expandMap.get("from1"));
        }
    }
}
