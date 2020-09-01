package com.movit.bean;

import lombok.Data;
import org.apache.commons.beanutils.BeanUtils;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;

/**
 * @Author: yangguoxiong
 * @Date: 2019/12/31
 */
@Data
public class Mark {

    private String name;
    private int age;
    
    public static String test() {
    	return "test";
    }

    @Override
    public String toString() {
        return "Mark{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
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
