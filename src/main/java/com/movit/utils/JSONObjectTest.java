package com.movit.utils;


import com.duizhuang.common.cache.redis.JsonUtil;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;

/**
 * @author: yangguoxiong
 * @date: 2021/1/21 17:01
 * @description:
 */
public class JSONObjectTest {

    public static void main(String[] args) {
        DynamicVO vo = new DynamicVO();
        vo.setId(1L);
        vo.setName("gee测试");
        vo.setTime(new Date());
        // 把DynamicVO转成Dynamic,传递Dynamic.class字节码对象.不用new
        String json = JsonUtil.toJSon(vo);
        Dynamic dynamic = JsonUtil.readValue(json, Dynamic.class);
        System.out.println(dynamic);
    }

    @Data
    @ToString
    static class Dynamic implements Serializable {

        private static final long serialVersionUID = 6203515913160429189L;

        private Long id;

        private String name;

        private Date time;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    static class DynamicVO implements Serializable {

        private static final long serialVersionUID = -1228735066170223406L;

        private Long id;

        private String name;

        private Date time;
    }
}
