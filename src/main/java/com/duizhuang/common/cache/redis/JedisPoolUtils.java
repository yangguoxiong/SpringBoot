package com.duizhuang.common.cache.redis;

/**
 * 类说明
 *
 * @Author: ygx
 * @Date: 2020/3/30
 */

import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

public class JedisPoolUtils {
    private static volatile JedisPool jedisPool;

    private JedisPoolUtils() {
    }

    public static JedisPool getInstance() {
        if (jedisPool == null) {
            synchronized(JedisPoolUtils.class) {
                if (jedisPool == null) {
                    JedisPoolConfig config = new JedisPoolConfig();
                    config.setMinIdle(3);
                    config.setMaxIdle(50);
                    config.setMaxTotal(100);
                    config.setMaxWaitMillis(5000);
                    config.setTestOnBorrow(true);
                    config.setTestOnReturn(true);
                    jedisPool = new JedisPool(config, "127.0.0.1", 6379);
                }
            }
        }
        return jedisPool;
    }
}
