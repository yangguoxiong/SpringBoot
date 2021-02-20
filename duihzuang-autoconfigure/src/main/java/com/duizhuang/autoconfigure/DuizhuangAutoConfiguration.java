package com.duizhuang.autoconfigure;

import com.duizhuang.properties.DuizhuangProperties;
import com.duizhuang.service.DuizhuangService;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author: yangguoxiong
 * @date: 2021/2/20 11:43
 * @description: 自定义配置类
 */
@Configuration
@EnableConfigurationProperties(DuizhuangProperties.class) // 开启DuizhuangProperties配置类, 并将DuizhuangProperties加入spring容器中
public class DuizhuangAutoConfiguration {

    @ConditionalOnMissingBean(DuizhuangService.class)
    @Bean
    public DuizhuangService duizhuangService() {
        return new DuizhuangService();
    }

}
