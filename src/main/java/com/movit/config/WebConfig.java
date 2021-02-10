package com.movit.config;

import cn.hutool.core.util.ArrayUtil;
import com.movit.bean.Mark;
import org.apache.commons.lang.StringUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.format.FormatterRegistry;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.IOException;
import java.util.List;

/**
 * @author: yangguoxiong
 * @date: 2021/2/10 9:26
 * @description:
 */
@Configuration // 表示是一个配置类, 此配置类也会加入spring容器中
public class WebConfig {

    /**
     * springMvc配置类, 如果想要修改默认配置类,则只需要自定义一个WebMvcConfigurer的bean对象即可
     *
     * @return
     */
    @Bean
    public WebMvcConfigurer webMvcConfigurer() {
        return new WebMvcConfigurer() {
            /**
             * 自定义参数解析器, 将String类型封装成Mark对象给到Controller方法中.
             * @param registry
             */
            @Override
            public void addFormatters(FormatterRegistry registry) {
                registry.addConverter(new Converter<String, Mark>() {
                    @Override
                    public Mark convert(String source) {
                        if (StringUtils.isBlank(source)) {
                            return null;
                        }
                        String regex = ",";
                        String[] split = source.split(regex);
                        if (ArrayUtil.isEmpty(split)) {
                            return null;
                        }
                        Mark mark = new Mark();
                        mark.setName(split[0]);
                        mark.setAge(Integer.valueOf(split[1]));
                        return mark;
                    }
                });
            }

            @Override
            public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
                new HttpMessageConverter<Mark>() {
                    @Override
                    public boolean canRead(Class<?> clazz, MediaType mediaType) {
                        return false;
                    }

                    @Override
                    public boolean canWrite(Class<?> clazz, MediaType mediaType) {
                        return false;
                    }

                    @Override
                    public List<MediaType> getSupportedMediaTypes() {
                        return null;
                    }

                    @Override
                    public Mark read(Class<? extends Mark> clazz, HttpInputMessage inputMessage) throws IOException, HttpMessageNotReadableException {
                        return null;
                    }

                    @Override
                    public void write(Mark mark, MediaType contentType, HttpOutputMessage outputMessage) throws IOException, HttpMessageNotWritableException {

                    }
                };
            }
        };
    }
}
