package com.movit.bean;

import lombok.Data;

import java.io.Serializable;

/**
 * 测试驼峰字段和下划线字段是否可以互相转换
 */
@Data
public class CategoryCopy implements Serializable {

    private static final long serialVersionUID = 60638325295483452L;

    // 驼峰命名字段
    private String firstCategoryId;

}
