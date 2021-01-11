package com.duizhuang.common.cache.redis;

import org.apache.commons.lang3.math.NumberUtils;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

import java.util.*;

/**
 * jedis测试类
 * jedis有五种数据类型,指的是key对应的value有五种数据类型
 * 参考1: https://blog.csdn.net/zhangguanghui002/article/details/78770071?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-4.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-4.channel_param
 * 参考2: https://www.runoob.com/redis/redis-tutorial.html
 *
 * @Author: ygx
 * @Date: 2020/3/30
 */
public class JedisService {

    private static JedisPool pool = JedisPoolUtils.getInstance();

    public static void main(String[] args) {
        // key();
        // string();
        list();
        // set();
        // hash();
        // zsort();
        // incrbyOrDecrby();
    }

    /**
     * 键操作
     */
    private static void key() {
        Jedis jedis = pool.getResource();
        try {
            /**
             * 判断某个键是否存在: exists(key).
             */
            Boolean exists = jedis.exists("mark");
            System.out.println("判断key是否存在: " + exists);

            System.out.println("==========================================");

            /**
             * 获取所有key: keys("*").
             */
            Set<String> keys = jedis.keys("*");
            Iterator<String> iterator = keys.iterator();
            while (iterator.hasNext()) {
                String key = iterator.next();
                System.out.println("每个key: " + key);
            }

            System.out.println("==========================================");

            /**
             * 删除key: del(key). 返回删除行数
             */
            Long result = jedis.del("set");
            System.out.println("删除key的结果: " + result);

            System.out.println("==========================================");

            /**
             * 设置key的过期时间: expire(key, seconds).
             */
            Long row = jedis.expire("mark", 10);
            System.out.println("设置key的过期时间结果: " + row);

            /**
             * 获取key的剩余生存秒数: ttl(key). -2: key不存在 -1: key存在没有设置过期时间 其他: 则返回剩余事件ain秒数
             */
            Long ttl = jedis.ttl("mark");
            System.out.println("key剩余生存秒数: " + ttl);

            /**
             * 获取key对应value的数据类型: type(key).
             */
            String type = jedis.type("list");
            System.out.println(type);

        } catch (Exception e) {

        } finally {
            pool.close();
        }
    }

    /**
     * 字符串操作
     */
    private static void string() {
        Jedis jedis = pool.getResource();
        try {
            /**
             * 增加/覆盖操作: set(key, value). 插入成功,返回: OK
             */
            String s = jedis.set("mark", "value2");
            System.out.println("新增结果: " + s);

            System.out.println("==========================================");

            /**
             * 获取key: get(key).
             */
            String value = jedis.get("mark");
            System.out.println("key获取的值: " + value);

            System.out.println("==========================================");

            /**
             * 增加key value: setnx(key, value). 如果key重复,不插入也不更新. 插入成功返回: 1 插入失败(已有此key)返回: 0
             * jedis.lock(key)的原理就是用setnx实现,value的值设置为uuid,如果返回1表示可以拿到锁,如果返回0表示获取锁失败,直接返回错误信息.
             */
            Long row = jedis.setnx("mark1", "newValue");
            System.out.println("插入结果: " + row);
            System.out.println(jedis.get("mark1"));

            System.out.println("==========================================");

            /**
             * 增加数据项并添加过期时间: setex(key, seconds, value). 如果有此key,则更新value并添加过期时间
             */
            String setex = jedis.setex("mark", 1000, "hello world2");
            System.out.println("setex结果: " + setex);
            System.out.println("key 新值: " + jedis.get("mark"));
            System.out.println("key剩余过期时间: " + jedis.ttl("mark"));

            System.out.println("==========================================");

            /**
             * 在key对应value后面追加字符串
             */
            Long append = jedis.append("mark", " today");
            System.out.println("append结果: " + append);
            System.out.println(jedis.get("mark"));

            System.out.println("==========================================");

            /**
             * 批量增加key value: mset(key1, val1, key2, val2...) 成功返回: OK
             */
            String mset = jedis.mset("key1", "val1", "key2", "val2", "key3", "val3");
            System.out.println("mset的结果: " + mset);

            System.out.println("==========================================");

            /**
             * 批量获取字符串key: mget(keys...). keys可传可变参数,或者数组
             */
            String[] strings = {"key1", "key2", "key3", "mark"};
            // 数组
            List<String> mget = jedis.mget(strings);
            // 可变参数
            //List<String> mget = jedis.mget("key1", "key2", "key3", "mark");
            System.out.println("mget的结果: " + mget);

            System.out.println("==========================================");

            /**
             * 删除多个keys del(keys...). keys可传可变参数,或者数组 返回删除行数
             */
            String[] keys = {"key1", "key2", "key3"};
            int length = keys.length;
            Long del = jedis.del(keys);
            System.out.println("删除多个keys结果: " + del);
            System.out.println("是否全部删除: " + (length == NumberUtils.toInt(del.toString())));

            System.out.println("==========================================");

            /**
             *获取key的旧值,并更新新值 getSet(key, value). 返回旧值
             */
            String getSet = jedis.getSet("mark", "getSet");
            System.out.println("getSet的结果: " + getSet);

        } catch (Exception e) {

        } finally {
            pool.close();
        }
    }

    /**
     * list列表操作(可重复,有顺序)
     */
    private static void list() {
        Jedis jedis = pool.getResource();
        try {
            /**
             * 往key对应list左插入一个元素或者list lpush(key, values...). 可传可变参数或者数组 返回插入后的list长度
             */
            String[] list = {"val1", "val2"};
            Long lpush = jedis.lpush("list", list);
            System.out.println("lpush的结果: " + lpush);

            System.out.println("==========================================");

            /**
             * 获取list区间[i, j]元素: lrange(key, i, j). 返回List<String>
             */
            List<String> lrange = jedis.lrange("list", 0, -1);
            System.out.println("获取list的值: " + lrange);

            System.out.println("==========================================");

            /**
             * 删除list中指定value的个数(因为list是可重复的,所以存在多个相同的value) lrem(key, num, value).
             */
            Long lrem = jedis.lrem("list", 2, "val2");
            System.out.println("lrem的结果: " + lrem);
            List<String> all = jedis.lrange("list", 0, -1);
            System.out.println("获取list的值: " + all);

            System.out.println("==========================================");

            /**
             * 刪除list区间[i, j]之外的元素: ltrim(key, i, j).
             */

            /**
             * list左出栈一个元素 返回: 弹出的value
             */
            String lpop = jedis.lpop("list");
            System.out.println("lpop的结果: " + lpop);
            List<String> listAll = jedis.lrange("list", 0, -1);
            System.out.println("获取list的值: " + listAll);

            System.out.println("==========================================");

            /**
             * 右插入和出栈对应方法: rpush/rpop
             */

            /**
             * 修改list指定下标元素的值: lset(key, index, value). 返回: OK
             */
            String lset = jedis.lset("list", 1, "test");
            System.out.println("lset的结果: " + lset);
            List<String> lsetAll = jedis.lrange("list", 0, -1);
            System.out.println("获取list的值: " + lsetAll);

            System.out.println("==========================================");

            /**
             * 获取list指定下标元素的值 lindex(key, index). 返回: value
             */
            String lindex = jedis.lindex("list", 1);
            System.out.println("lindex的值: " + lindex);

            System.out.println("==========================================");

            /**
             * 获取list的长度 llen(key).
             */
            Long llen = jedis.llen("list");
            System.out.println("llen的结果: " + llen);
            List<String> llenAll = jedis.lrange("list", 0, -1);
            System.out.println("获取list的值: " + llenAll);

            System.out.println("==========================================");

        } catch (Exception e) {

        } finally {
            pool.close();
        }
    }

    /**
     * set操作(不可重复,无序)
     */
    public static void set() {
        Jedis jedis = pool.getResource();
        try {
            /**
             * 批量插入set集合: sadd(key, values...) 可传可变参数或数组 返回: 插入集合长度. 如果有重复数据,只插入一个
             */
            /*String[] set = {"mark", "lori", "messi", "jesse", "mark"};
            Long sadd = jedis.sadd("set", set);
            // 只插入4条,因为mark重复了.
            System.out.println("sadd的结果: " + sadd);

            System.out.println("==========================================");*/

            /**
             * 获取set集合所有元素: smembers(key)
             */
            /*Set<String> smembers = jedis.smembers("set");
            System.out.println("所有set集合: " + smembers);

            System.out.println("==========================================");*/

            /**
             * 判断元素是否在set集合中: sismember(key, value) 返回: true/false
             */
            /*Boolean sismember = jedis.sismember("b1", "a");
            System.out.println("sismember的结果: " + sismember);*/

            /**
             * 删除set集合一个或多个元素: srem(key, values...) 可传可变参数或者数组 返回: 删除元素个数
             */
            /*Long srem = jedis.srem("set", "lori", "messi");
            System.out.println("srem的结果: " + srem);

            System.out.println("==========================================");*/

            /**
             * 随机出栈set集合中的一个或多个元素 spop(key, int count). 如果不传count表示弹出一个,传则弹出count个 返回: 弹出的元素
             */
            /*String spop = jedis.spop("set");
            System.out.println("spop弹出的元素: " + spop);

            System.out.println("==========================================");*/

            /**
             * 随机返回set集合中的一个或多个元素,仅返回,不改动set集合 srandmember(key, int count) 返回: 随机的一个或多个元素
             */
            /*jedis.sadd("srandmember", "3", "6", "9", "2", "38");
            List<String> srandmember = jedis.srandmember("srandmember", 2);
            System.out.println("随机获得的srandmember集合中的元素: " + srandmember);*/

            /**
             * 获取set集合元素个数 scard(key) 返回: 集合长度
             */
            /*Long scard = jedis.scard("set");
            System.out.println("scard的结果: " + scard);

            System.out.println("==========================================");*/

            /**
             * 将元素val从集合k1剪切到k2 smove(k1, k2, val) 返回: 影响行数
             */
            /*jedis.sadd("k1", "a", "b", "c");
            jedis.sadd("k2", "1", "2", "3");
            Long smove = jedis.smove("k1", "k2", "b");
            System.out.println("smove的结果: " + smove);
            System.out.println(jedis.smembers("k1"));
            System.out.println(jedis.smembers("k2"));

            System.out.println("==========================================");*/

            /**
             * 获取集合k1和k2的交集 sinter(k1, k2, k3...). 可传可变参数或者key的数组 返回: 交集集合
             */
            /*jedis.sadd("s1", "a", "b", "c", "e");
            jedis.sadd("s2", "e", "f", "g", "a");
            Set<String> sinter = jedis.sinter("s1", "s2", "k1");
            System.out.println("sinter集合的交集: " + sinter);

            System.out.println("==========================================");*/

            /**
             * 获取集合k1和k2的并集 sunion(k1, k2, k3...). 可传可变参数或者key的数组 返回: 并集集合
             */
            /*jedis.sadd("b1", "a", "b", "c", "e");
            jedis.sadd("b2", "e", "f", "g", "a");
            Set<String> sunion = jedis.sunion("b1", "b2");
            System.out.println("sunion集合的并集: " + sunion);

            System.out.println("==========================================");*/

            /**
             * 获取集合k1与k2等其他集合的差集 sdiff(k1, k2, k3...). 可传可变参数或者key的数组 返回: 返回的是k1集合中,跟其他集合不同的元素.而不是所有集合不同的差集
             */
            /*jedis.sadd("d1", "a", "b", "c", "e");
            jedis.sadd("d2", "e", "f", "g", "a");
            Set<String> sdiff = jedis.sdiff("b1", "b2", "k1");
            System.out.println("sdiff集合的差集: " + sdiff);
            System.out.println(jedis.smembers("b1"));
            System.out.println(jedis.smembers("b2"));
            System.out.println(jedis.smembers("k1"));

            System.out.println("==========================================");*/


        } catch (Exception e) {

        } finally {
            pool.close();
        }

    }

    /**
     * hash操作(相当于Map)
     */
    public static void hash() {
        Jedis jedis = pool.getResource();
        try {
            /**
             * 添加一个或多个hash hset(key, field, value) / hmset(key, Map<String, String> map)
             */
            // 添加一个hash key value
            Long hset = jedis.hset("hash", "mark", "国学");
            // 添加多个hash key value
            Map<String, String> map = new HashMap<>();
            map.put("lory", "萝莉");
            map.put("messy", "美系");
            // 使用hmset,不要使用hset去传递map,会报错
            String hmset = jedis.hmset("hash", map);
            System.out.println("hset一个的结果: " + hset);
            System.out.println("hmset多个的结果: " + hmset);

            System.out.println("==========================================");

            /**
             * 获取key的所有hash对应k-y元素: hgetAll(key).
             */
            /*Map<String, String> hgetAll = jedis.hgetAll("hash");
            Set<Map.Entry<String, String>> entries = hgetAll.entrySet();
            for (Map.Entry<String, String> entry : entries) {
                System.out.println("key: " + entry.getKey());
                System.out.println("value: " + entry.getValue());
            }

            System.out.println("==========================================");*/

            /**
             * 获取hash所有的keys: hkeys(key)
             */
            /*Set<String> hkeys = jedis.hkeys("hash");
            System.out.println("hkeys的结果: " + hkeys);

            System.out.println("==========================================");*/

            /**
             * 获取hash所有的values: hvals(key)
             */
            /*List<String> hvals = jedis.hvals("hash");
            System.out.println("hvals的结果: " + hvals);

            System.out.println("==========================================");*/

            /**
             * 从hash中删除一个或多个元素: hdel(key, field1, field2) 返回: 删除的元素个数
             */
            /*Long hdel = jedis.hdel("hash", "mark", "lory");
            System.out.println("hdel的结果: " + hdel);

            System.out.println("==========================================");*/

            /**
             * 获取hash长度: hlen(key)
             */
            /*Long hlen = jedis.hlen("hash");
            System.out.println("hlen的结果: " + hlen);

            System.out.println("==========================================");*/

            /**
             * 判断hash中是否有field对应的元素: hexists(key, field)
             */
            /*Boolean hexists = jedis.hexists("hash", "mark");
            System.out.println("hexists的结果: " + hexists);

            System.out.println("==========================================");*/

            /**
             * 获取多个hash中的元素: hmget(key, field1, field2...). 可变参或数组
             */
            /*String[] fields = {"lory", "mark"};
            List<String> hmget = jedis.hmget("hash", fields);
            System.out.println("hmget的结果: " + hmget);

            System.out.println("==========================================");*/

            /**
             * 只有hash中不存在此field,才设值,否则不设值: hsetnx(key, field, value) 返回: 1: 插入成功 0: 有此key,不操作
             */
            /*Long hsetnx = jedis.hsetnx("hash", "mark", "国学");
            System.out.println("hsetnx的结果: " + hsetnx);*/

        } catch (Exception e) {

        } finally {
            pool.close();
        }
    }

    /**
     * zsort操作(根据分数score有序的集合,sorted set)
     */
    public static void zsort() {
        Jedis jedis = pool.getResource();
        try {
            /**
             * 添加一个或多个有序集合: zadd(key, score, value) / zadd(key, Map<String, Double> map) 返回: 插入行数. 如果已经有这个value,则更新score分数
             */
            /*// 添加一个有序集合
            Long zadd = jedis.zadd("zsort", 10, "mark");
            System.out.println("zadd的结果: " + zadd);
            // 添加多个有序集合
            Map<String, Double> map = new HashMap<>();
            map.put("lory", 13D);
            map.put("jessy", 9D);
            Long zsortMap = jedis.zadd("zsort", map);
            System.out.println("zsortMap的结果: " + zsortMap);
            // 查询zsort集合
            System.out.println(jedis.zrange("zsort", 0, -1));

            System.out.println("==========================================");*/

            /**
             * 获取zsort区间[i, j]的元素(升序),j为-1表示到最后: zrange(key, i, j)
             */
            /*Set<String> zrange = jedis.zrange("zsort", 0, -1);
            System.out.println("zrange的结果: " + zrange);

            System.out.println("==========================================");*/

            /**
             * 获取zsort区间[i, j]的元素(降序),j为-1表示到最后: zrange(key, i, j)
             */
            /*Set<String> zrevrange = jedis.zrevrange("zsort", 0, -1);
            System.out.println("zrevrange的结果: " + zrevrange);

            System.out.println("==========================================");*/

            /**
             * 获取zsort区间[i, j]的元素的成员和分数: zrangeWithSocres(key, i, j)
             */
            /*Set<Tuple> zrangeWithScores = jedis.zrangeWithScores("zsort", 0, 1);
            Iterator<Tuple> iterator = zrangeWithScores.iterator();
            while (iterator.hasNext()) {
                Tuple next = iterator.next();
                String key = next.getElement();
                double score = next.getScore();
                System.out.println("成员: " + key);
                System.out.println("成员分数: " + score);
            }

            System.out.println("==========================================");*/

            /**
             * 获取zsort中,分数在[i, j]区间的成员: zrangeByScore(key, minScore, maxScore)
             */
            /*Set<String> zrangeByScore = jedis.zrangeByScore("zsort", 9, 9.8);
            System.out.println(zrangeByScore);

            System.out.println("==========================================");*/

            /**
             * 获取zsort中,分数在[i, j]区间的成员和分数: zrangeByScoreWithScores(key, i, j)
             */
            /*Set<Tuple> zrangeByScoreWithScores = jedis.zrangeByScoreWithScores("zsort", 9, 10);
            Iterator<Tuple> iterator = zrangeByScoreWithScores.iterator();
            while (iterator.hasNext()) {
                Tuple next = iterator.next();
                System.out.println("成员: " + next.getElement());
                System.out.println("成员分数: " + next.getScore());
            }

            System.out.println("==========================================");*/

            /**
             * 获取zsort中value的分数: zscore(key, value)
             */
            /*Double zscore = jedis.zscore("zsort", "lory");
            System.out.println("zscore的结果: " + zscore);

            System.out.println("==========================================");*/

            /**
             * 获取zsort中value的分数的排名: zrank(key, value). 从0开始的排名,需要加1
             */
            /*Long zrank = jedis.zrank("zsort", "jessy");
            System.out.println(jedis.zrange("zsort", 0, -1));
            System.out.println("zrank的结果: " + zrank);

            System.out.println("==========================================");*/

            /**
             * 删除zsort中value的元素: zrem(key, value). 返回: 删除行数
             */
            /*Long zrem = jedis.zrem("zsort", "mark");
            System.out.println("zrem的结果: " + zrem);

            System.out.println("==========================================");*/

            /**
             * 获取zsort长度: zlen(key).
             */
            /*Long zcard = jedis.zcard("zsort");
            System.out.println("zcard的结果: " + zcard);

            System.out.println("==========================================");*/

            /**
             * 获取zsort中,score在[i, j]区间的个数: zcount(key, i, j).
             */
            /*jedis.zadd("zsort", 30, "holgan");
            jedis.zadd("zsort", 11, "mark");
            jedis.zadd("zsort", 6, "sheng");
            Long zcount = jedis.zcount("zsort", 10, 20);
            System.out.println(jedis.zrange("zsort", 0, -1));
            System.out.println("zcount的结果: " + zcount);

            System.out.println("==========================================");*/

            /**
             * 把zsort中value的score += n: zincrby(key, n, value). 可以传可变参数或数组 返回: 加分后的分数
             */
            /*Double zincrby = jedis.zincrby("zsort", 1, "mark");
            System.out.println(jedis.zrange("zsort", 0, -1));
            System.out.println("zincrby的结果: " + zincrby);

            System.out.println("==========================================");*/

        } finally {
            pool.close();
        }

    }

    /**
     * incrbyOrDecrby操作(自增或自减),注意: 是对value进行操作的.所以value要是一个数字
     */
    public static void incrbyOrDecrby() {
        Jedis jedis = pool.getResource();
        try {
            /**
             * 将key的value自增 += n: incrBy(key, n) 返回: 自增后的值
             */
            /*Long incrBy = jedis.incrBy("score", 2);
            System.out.println("incrBy的结果: " + incrBy);

            System.out.println("==========================================");*/

            /**
             * 将key的value自增 -= n: decrBy(key, n) 返回: 自减后的值
             */
            /*Long decrBy = jedis.decrBy("score", 3);
            System.out.println("decrBy的结果: " + decrBy);

            System.out.println("==========================================");*/

        } finally {
            pool.close();
        }

    }

    static class RankVO {
        private String name;
        private double score;

        public RankVO(String name, double score) {
            this.name = name;
            this.score = score;
        }

        public String getName() {
            return this.name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public double getScore() {
            return this.score;
        }

        public void setScore(double score) {
            this.score = score;
        }

        public String toString() {
            return "RankVO{name='" + this.name + '\'' + ", score=" + this.score + '}';
        }
    }
}
