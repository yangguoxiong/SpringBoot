package com.movit.utils;

import cn.hutool.core.util.ObjectUtil;
import com.movit.bean.Mark;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;

import java.lang.reflect.Field;

/**
 * @author: yangguoxiong
 * @date: 2021/2/1 15:13
 * @description: 对象属性设置默认值
 */
public class ObjectSetDefaultField {

    public static void main(String[] args) {
        Mark mark = new Mark();
        handleParamDefault(mark);
        System.out.println(mark);
    }

    /**
     * 处理对象中包装类, 设置默认值
     *
     * @param object 对象
     */
    public static void handleParamDefault(Object object) {
        Class<?> clazz = object.getClass();
        Field[] declaredFields = clazz.getDeclaredFields();
        for (Field field : declaredFields) {
            // 遍历所有字段
            if (field.getType().equals(Integer.class)) {
                // 处理Integer
                setValue(object, field, NumberUtils.INTEGER_ZERO);
            }
            if (field.getType().equals(String.class)) {
                // 处理String
                setValue(object, field, StringUtils.EMPTY);
            }
        }
    }

    /**
     * 设置默认值
     *
     * @param object 待处理对象
     * @param field  字段
     * @param t      包装类值
     * @param <T>    包装类
     */
    public static <T> void setValue(Object object, Field field, T t) {
        boolean accessible = field.isAccessible();
        field.setAccessible(true);
        try {
            // null值设置默认值
            if (ObjectUtil.isNull(field.get(object))) {
                field.set(object, t);
            }
            field.setAccessible(accessible);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
    }

}
