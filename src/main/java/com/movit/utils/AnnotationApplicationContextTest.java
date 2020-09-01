package com.movit.utils;

import com.movit.bean.Mark;
import com.movit.config.ApiConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * 测试注解方式
 * @Author: yangguoxiong
 * @Date: 2019/12/31
 */
public class AnnotationApplicationContextTest {

    public static void main(String[] args) {
        /**
         * 1.创建需要注入的bean:Mark
         * 2.创建ApiConfig配置类,使用@Configuration,标识为spring的配置类.通过@Bean方式注入Mark这个bean,将bean添加到spring容器
         * 3.在测试类中创建AnnotationConfigApplicationContext,注册配置类,refresh将配置类中的bean注入到spring容器,通过getBean获得spring容器的bean
         */
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
        context.register(ApiConfig.class);
        context.refresh();
        Mark markSon = (Mark)context.getBean("markSon");
        System.out.println(markSon);
    }
}
