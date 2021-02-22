package com.movit.utils;

import lombok.Data;

import java.util.LinkedHashMap;
import java.util.Map;

/**
 * @author: yangguoxiong
 * @date: 2021/2/22 10:03
 * @description: LRU算法测试类
 */
@Data
public class LruTest<K, V> extends LinkedHashMap<K, V> {

    private final static float DEFAULT_LOAD_FACTOR = 0.75f;

    private int capacity;

    public LruTest(int capacity) {
        // true表示: 按照最近被使用的顺序来排序,如果key重复被调用,就会排在链表最前面.
        // false表示: 固定按照插入顺序排序.
        super(capacity, DEFAULT_LOAD_FACTOR, true);
        this.capacity = capacity;
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        // 表示当map中是数量超过最大空间数量,会删除最久未被使用的key
        return size() > this.capacity;
    }

    public static void main(String[] args) {
        LruTest lru = new LruTest(3);
        lru.put("1", "a");
        lru.put("2", "b");
        lru.put("3", "c");
        System.out.println(lru.keySet());

        // 重新给key为1赋值,移到链表最前面
        lru.put("1", "a");
        System.out.println(lru.keySet());

        // 新的key超过了3个最大空间数量,会把最久未被使用的key(也就是2)删除
        lru.put("4", "d");
        System.out.println(lru.keySet());

    }
}
