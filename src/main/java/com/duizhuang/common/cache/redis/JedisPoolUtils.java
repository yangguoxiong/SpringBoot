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
            Class var0 = JedisPoolUtils.class;
            synchronized(JedisPoolUtils.class) {
                if (jedisPool == null) {
                    JedisPoolConfig config = new JedisPoolConfig();
                    config.setMaxIdle(30);
                    config.setMaxIdle(10);
                    jedisPool = new JedisPool(config, "127.0.0.1", 6379);
                }
            }
        }

        return jedisPool;
    }
}
