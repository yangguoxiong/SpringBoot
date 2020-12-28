package com.movit.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.apache.commons.collections.map.HashedMap;

import java.util.Map;
import java.util.function.Function;

/**
 * @author: yangguoxiong
 * @date: 2020/12/28 13:50
 * @description: if/else优化
 */
public class MapTest {

    private static Map<Integer, Function<String, Action>> actionMap = new HashedMap();

    static {
        actionMap.put(1, s -> new Action(s + " - 第一"));
        actionMap.put(2, s -> new Action(s + " - 第二"));
        actionMap.put(3, s -> new Action(s + " - 第三"));
    }

    public static void main(String[] args) {
        // 使用map的表驱动法优化if/else
        System.out.println(actionMap.get(2).apply("测"));
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @ToString
    static class Action {
        private String text;
    }
}
