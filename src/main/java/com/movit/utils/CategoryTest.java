package com.movit.utils;

import com.movit.bean.Category;
import com.movit.bean.CategoryCopy;
import org.apache.commons.beanutils.PropertyUtils;

import java.beans.PropertyDescriptor;

/**
 * 测试驼峰命名和下划线命名互相转换
 */
public class CategoryTest {

    public static void main(String[] args) {
        // 将下划线命名的字段,转成驼峰命名,再把下划线字段的值,复制给另外一个对象的驼峰命名的阻断
        Category category = new Category();
        CategoryCopy copy = new CategoryCopy();
        copy.setFirstCategoryId("一级分类");
        PropertyDescriptor[] propertyDescriptors = PropertyUtils.getPropertyDescriptors(category);

        // 获取下划线命名的字段名 -> 转换成驼峰命名 -> 根据驼峰命名字段名查询值 -> 设置到下划线名的字段值
        for (PropertyDescriptor p : propertyDescriptors) {
            String name = p.getName();
            String field = underlineToCamel(name);
            try {
                Object value = PropertyUtils.getProperty(copy, field);
                if (value == null) {
                    continue;
                }
                PropertyUtils.setProperty(category, name, value);
            } catch (Exception e) {
                System.out.println("转换异常");
            }
        }
        System.out.println("转换后的category字段first_category_id的值: " + category.getFirst_category_id());

    }

    /**
     * user_name -> userName
     *
     * @param name
     * @return
     */
    public static String underlineToCamel(String name) {
        String result = "";
        if (name == null || name.isEmpty()) {
            return "";
        } else if (!name.contains("_")) {
            return name.substring(0, 1).toLowerCase() + name.substring(1);
        }
        String camels[] = name.split("_");
        for (String camel : camels) {
            if (camel.isEmpty()) {
                continue;
            }
            if (result.length() == 0) {
                result += camel.toLowerCase();
            } else {
                result += camel.substring(0, 1).toUpperCase();
                result += camel.substring(1).toLowerCase();
            }
        }
        return result;
    }
}
