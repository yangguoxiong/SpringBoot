package com.movit.bean;

import lombok.Data;

import java.io.Serializable;

/**
 * 测试驼峰字段和下划线字段是否可以互相转换
 */
@Data
public class Category implements Serializable {

    private static final long serialVersionUID = -3718863518600384746L;

    // 下划线命名字段
    private String first_category_id;

}
