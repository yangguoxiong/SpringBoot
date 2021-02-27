package com.movit.utils;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class HashMapTest {

    public static void main(String[] args) {
        Map<String, String> map = new HashMap<String, String>(3);
	    /**
	     * 关于map容量初始化大小问题:
	     * jdk1.8在new HashMap的时候,不是你传递的容量是多大,new的map就多大,而是先把当前容量减一取第一个比他大的2的幂等的数
	     * 例如3, 先减1, 则是2, 第一个比2大的2的幂等的数就是2的2次方,也就是4.所以map的容量是4而不是3.
	     * 以此类推
	     * 1 -> 1
	     * 3 -> 4
	     * 7 -> 8
	     * 9 -> 16
	     * 所以,通过初始化设定了桶容量一定是2的幂,所以在扩容的时候(*2)也一定是2的幂. 2的幂的好处是: 扩容因子(0.75) * 容量 得到的扩容临界值一定是整数
	     *
	     * 关于如果要自己设置具体map容量的问题:
	     * 上述可知,真正要计算的map容量大小,不应该直接设置需要存储的元素个数,参考官方应该是: (需要存储的元素个数 / 扩容因子(默认是0.75)) + 1
	     * 例如: 你想要存储8个元素, 那么你在new HashMap<>(initialCapacity)时, initialCapacity = 8 / 0.75 + 1 = 11, 所以,new hashMap<>(11)传递的就是11,
	     * 最后得到的容量是16.这才是合理的.
	     * 如果直接是new HashMap<>(8),计算后的容量就是8.这显然不合理.因为,容量如果是8,那么当size超过了 8 * 0.75 = 6的时候,就要扩容到16的容量.扩容几率太高了.
	     * 你实际要存储8个元素,存到第6个的时候,就要对map扩容到16才会继续存第7和第8个元素.
	     * 而16的容量,就要到12才要扩容.更合理.
	     *
	     * 总结两点:
	     * 1. new HashMap的时候,你指定了容量,不一定返回的就是你所指定的容量,而是根据计算得到一个新的容量,目的是为了提高hash的效率.容量一定是2的幂.
	     * 2. 如果想要自定义存储元素个数,推荐使用guava的Maps.newHashMapWithExpectedSize(expectedSize);
	     *    或者new HashMap<>(需要存储的元素个数 / 扩容因子(默认是0.75) + 1);
	     *
	     * 目的:
	     * 计算容量(capacity)目的就是为了得到扩容的临界值: capacity * loadFactor, 超过临界值, 扩容到原理容量的2倍.
	     *
	     * 注意:
	     * 容量,就是Hash表中数组的个数.也就是桶的个数.
	     * 扩容,就是扩大桶的个数.
	     */
	    // map.put("hahaha", "hollischuang"); put方法执行的时候,会判断: 当前map的size是否大于 容量 * 扩容因子, 如果大于,则扩容为原来的2倍.

        Class<?> mapType = map.getClass();
        Method capacity = null;
        try {
            capacity = mapType.getDeclaredMethod("capacity");
            capacity.setAccessible(true);
            System.out.println("capacity : " + capacity.invoke(map));
	        System.out.println(0 > 0);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
