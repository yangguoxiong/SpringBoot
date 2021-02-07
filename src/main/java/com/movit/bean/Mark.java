package com.movit.bean;

import lombok.Data;
import lombok.ToString;
import org.apache.commons.beanutils.BeanUtils;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;

/**
 * @Author: yangguoxiong
 * @Date: 2019/12/31
 */
@Data
@ToString
public class Mark {

    private String name;
    private String password;
    private int age;

    public static String test() {
        return "test";
    }

    public static void main(String[] args) throws InvocationTargetException, IllegalAccessException {
        Mark mark = new Mark();
        Map<String, Object> map = new HashMap<>();
        map.put("name", "mark");
        map.put("age", 90);
        BeanUtils.populate(mark, map);
        System.out.println(mark);
    }
}
