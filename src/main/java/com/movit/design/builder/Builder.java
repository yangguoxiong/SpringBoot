package com.movit.design.builder;

import cn.hutool.core.lang.Singleton;
import lombok.Data;
import org.springframework.beans.BeanUtils;

/**
 * @author: yangguoxiong
 * @date: 2021/1/16 17:56
 * @description: 建造者模式类
 */
@Data
public class Builder {

    private String cpu;

    private String screen;

    private String camera;

    public static Builder getInstance() {
        return Singleton.get(Builder.class);
    }

    public Builder cpu(String cpu) {
        this.cpu = cpu;
        return this;
    }

    public Builder screen(String screen) {
        this.screen = screen;
        return this;
    }

    public Builder camera(String camera) {
        this.camera = camera;
        return this;
    }

    public Phone build() {
        Phone phone = new Phone();
        BeanUtils.copyProperties(this, phone);
        return phone;
    }
}
