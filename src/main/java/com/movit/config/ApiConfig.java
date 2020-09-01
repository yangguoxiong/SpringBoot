package com.movit.config;

import com.movit.bean.Mark;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @Author: yangguoxiong
 * @Date: 2019/12/31
 */
@Configuration
public class ApiConfig {

    @Bean("markSon")
    public Mark markSon () {
        Mark mark = new Mark();
        mark.setName("mark`1");
        mark.setAge(18);
        return mark;
    }

    @Bean("markFather")
    public Mark markFather () {
        Mark mark = new Mark();
        mark.setName("mark`2");
        mark.setAge(28);
        return mark;
    }

}
