package com.movit.utils;

import cn.hutool.core.date.DatePattern;
import cn.hutool.core.map.MapUtil;
import com.duizhuang.common.cache.redis.JsonUtil;
import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import lombok.Data;
import lombok.Getter;
import okhttp3.*;
import org.apache.commons.collections4.MapUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * OKHttp请求API
 */
public class HttpUtils {

    private final static Logger logger = LoggerFactory.getLogger(HttpUtils.class);

    /**
     * 建造者模式获得okHttpClient对象
     */
    private final static OkHttpClient client = new OkHttpClient().newBuilder().
            connectTimeout(60000, TimeUnit.MILLISECONDS).readTimeout(60000, TimeUnit.MILLISECONDS).build();

    /**
     * get方法请求
     *
     * @param url
     * @return
     */
    public static String get(String url) {
        Request request = new Request.Builder().url(url).build();
        return get(request);
    }

    public static String get(Request request) {
        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                return response.body().string();
            }
            if (logger.isDebugEnabled()) {
                logger.debug(response.body().string());
            }
        } catch (IOException e) {
            logger.error("请求失败:{}", e);
        }
        return null;
    }

    /**
     * post传递Json参数
     *
     * @param url
     * @param json
     * @return
     */
    public static String postJson(String url, String json) {
        MediaType JSON = MediaType.parse("application/json; charset=utf-8");
        RequestBody requestBody = RequestBody.create(JSON, json);
        Request request = new Request.Builder().url(url).post(requestBody)
                .build();
        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                return response.body().string();
            }
        } catch (IOException e) {
            logger.error("请求失败:{}", e);
        }
        return null;
    }

    /**
     * post请求传递form表单参数
     *
     * @param url
     * @param params
     * @return
     */
    public static String postForm(String url, Map<String, Object> params) {
        FormBody.Builder builder = new FormBody.Builder();
        if (MapUtils.isNotEmpty(params)) {
            for (Map.Entry<String, Object> entry : params.entrySet()) {
                Object value = entry.getValue();
                if (value != null) {
                    builder.add(entry.getKey(), value.toString());
                }
            }
        }
        Request request = new Request.Builder().url(url).post(builder.build()).build();
        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                return response.body().string();
            }
        } catch (IOException e) {
            logger.error("请求失败:{}", e);
        }
        return null;
    }

    public static void main(String[] args) {
        // 模拟请求ES
        Map<String, Object> param = new HashMap<>(5);
        param.put("create_start", cn.hutool.core.date.DateUtil.format(new Date(), DatePattern.NORM_DATETIME_PATTERN));
        param.put("size", 10);
        param.put("from", 1);
        Map<String, String> statuses = MapUtil.builder("user_name", "杨国雄").build();
        param.put("statuses", statuses);

        RestSelectParam selectParam = new RestSelectParam();
        selectParam.buildInstance();
        selectParam.setScript(TemplateEnum.OPERATION.getScriptId());
        selectParam.setIndices(IndexEnum.OPERATION.getName());
        selectParam.setParams(param);
        selectParam.setMapUnderscoreToCamelCase(true);

        String response = HttpUtils.postJson("http://10.0.100.79:33449/openapi/rest/search/page", JsonUtil.toJSon(selectParam));

        System.out.println(response);
    }

    @Data
    static class RestSelectParam {

        private String host;
        private String port;
        private String schema;
        private String script;
        private String indices;
        /**
         * 是否开启驼峰命名自动映射，即从数据库列名A_COLUMN 映射到经典Java属性名 aColumn。
         */
        private Boolean mapUnderscoreToCamelCase = false;
        private Map<String, Object> params = new HashMap<>();


        public void buildInstance() {
            this.host = "10.0.0.30";
            this.port = "9200";
            this.schema = "http";
        }

        public void buildInstance(String host, String port, String schema) {
            this.host = host;
            this.port = port;
            this.schema = schema;
        }

        public Boolean getMapUnderscoreToCamelCase() {
            return mapUnderscoreToCamelCase;
        }

        public void setMapUnderscoreToCamelCase(Boolean mapUnderscoreToCamelCase) {
            this.mapUnderscoreToCamelCase = mapUnderscoreToCamelCase;
        }
    }

    @Getter
    public enum TemplateEnum {

        /**
         * "{ {{#from}} \"from\": \"{{from}}\", {{/from}}{{#size}}  \"size\": \"{{size}}\", {{/size}} \"timeout\": \"10s\",\"track_total_hits\": \"true\",\"_source\":[\"id\"],\"sort\": [{\"id\": {\"order\": \"{{orderBy}}{{^orderBy}}desc{{/orderBy}}\"}}],\"query\": {\"bool\": { \"filter\":[{\"range\": {\"send_time\": {\"format\": \"yyyy-MM-dd HH:mm:ss\" {{#send_time_start}},\"gte\": \"{{send_time_start}}\"{{/send_time_start}}{{#send_time_end}},\"lte\": \"{{send_time_end}}\"{{/send_time_end}} }}} {{#statuses}},{{#id}} {\"term\":{\"id\":{{id}} }}{{/id}} {{#msg_id}}{{#id}},{{/id}}{\"term\":{\"msg_id\":{{msg_id}} }}{{/msg_id}}{{#user_id}}{{#msg_id}},{{/msg_id}}{{^msg_id}}{{#id}},{{/id}}{{/msg_id}}{\"term\":{\"user_id\":\"{{user_id}}\" }}{{/user_id}} {{#log_id}}{{#user_id}},{{/user_id}}{{^user_id}}{{#msg_id}},{{/msg_id}}{{^msg_id}}{{#id}},{{/id}}{{/msg_id}}{{/user_id}}{\"term\":{\"log_id\":\"{{log_id}}\" }}{{/log_id}}{{#type}}{{#log_id}},{{/log_id}}{{^log_id}}{{#user_id}},{{/user_id}}{{^user_id}}{{#msg_id}},{{/msg_id}}{{^msg_id}}{{#id}},{{/id}}{{/msg_id}}{{/user_id}}{{/log_id}}{\"term\":{\"type\":\"{{type}}\" }}{{/type}}  {{#from_user_id}}{{#type}},{{/type}}{{^type}}{{#log_id}},{{/log_id}}{{^log_id}}{{#user_id}},{{/user_id}}{{^user_id}}{{#msg_id}},{{/msg_id}}{{^msg_id}}{{#id}},{{/id}}{{/msg_id}}{{/user_id}}{{/log_id}}{{/type}}{\"term\":{\"from_user_id\":\"{{from_user_id}}\" }}{{/from_user_id}}{{#from_user_name}}{{#from_user_id}},{{/from_user_id}}{{^from_user_id}}{{#type}},{{/type}}{{^type}}{{#log_id}},{{/log_id}}{{^log_id}}{{#user_id}},{{/user_id}}{{^user_id}}{{#msg_id}},{{/msg_id}}{{^msg_id}}{{#id}},{{/id}}{{/msg_id}}{{/user_id}}{{/log_id}}{{/type}}{{/from_user_id}}{\"wildcard\":{\"from_user_name.keyword\":\"{{from_user_name}}\" }}{{/from_user_name}}{{#operator_name}}{{#from_user_name}},{{/from_user_name}}{{^from_user_name}}{{#from_user_id}},{{/from_user_id}}{{^from_user_id}}{{#type}},{{/type}}{{^type}}{{#log_id}},{{/log_id}}{{^log_id}}{{#user_id}},{{/user_id}}{{^user_id}}{{#msg_id}},{{/msg_id}}{{^msg_id}}{{#id}},{{/id}}{{/msg_id}}{{/user_id}}{{/log_id}}{{/type}}{{/from_user_id}}{{/from_user_name}}{\"wildcard\":{\"operator_name.keyword\":\"{{operator_name}}\" }}{{/operator_name}}{{#user_name}}{{#operator_name}},{{/operator_name}}{{^operator_name}}{{#from_user_name}},{{/from_user_name}}{{^from_user_name}}{{#from_user_id}},{{/from_user_id}}{{^from_user_id}}{{#type}},{{/type}}{{^type}}{{#log_id}},{{/log_id}}{{^log_id}}{{#user_id}},{{/user_id}}{{^user_id}}{{#msg_id}},{{/msg_id}}{{^msg_id}}{{#id}},{{/id}}{{/msg_id}}{{/user_id}}{{/log_id}}{{/type}}{{/from_user_id}}{{/from_user_name}}{{/operator_name}}{\"wildcard\":{\"user_name.keyword\":\"{{user_name}}\" }}{{/user_name}} {{#msg}}{{#user_name}},{{/user_name}}{{^user_name}}{{#operator_name}},{{/operator_name}}{{^operator_name}}{{#from_user_name}},{{/from_user_name}}{{^from_user_name}}{{#from_user_id}},{{/from_user_id}}{{^from_user_id}}{{#type}},{{/type}}{{^type}}{{#log_id}},{{/log_id}}{{^log_id}}{{#user_id}},{{/user_id}}{{^user_id}}{{#msg_id}},{{/msg_id}}{{^msg_id}}{{#id}},{{/id}}{{/msg_id}}{{/user_id}}{{/log_id}}{{/type}}{{/from_user_id}}{{/from_user_name}}{{/operator_name}}{{/user_name}}{\"wildcard\":{\"msg.keyword\":\"{{msg}}\" }}{{/msg}}  {{/statuses}} ], \"must\": [{{#chat_sensitive}}{\"range\": {\"send_time\": {\"gte\": \"{{start_sensitive_time}}\",\"lte\": \"{{end_sensitive_time}}\", \"format\": \"yyyy-MM-dd HH:mm:ss\"}}},{\"bool\": {\"should\": [{\"bool\": {\"must\": [{\"term\": {\"from_user_id\": \"{{from_user_id}}\"}}, {\"term\": {\"user_id\": \"{{user_id}}\"}}]}}, {\"bool\": {\"must\": [{\"term\": {\"from_user_id\": \"{{user_id}}\"}}, {\"term\": {\"user_id\": \"{{from_user_id}}\"}}]}}]}}{{/chat_sensitive}} ]}}}"
         */
        CHAT_HISTORY("chat_history_admin", "后台查询模板"),
        OPERATION("operation_admin", "操作日志模板"),
        ;

        private String scriptId;

        private String remark;

        private TemplateEnum(String scriptId, String remark) {
            this.scriptId = scriptId;
            this.remark = remark;
        }
    }

    @Getter
    public enum IndexEnum {

        USER("core_usr"),
        ORDER("core_order"),
        PRODUCT("product"),
        CHAT_HISTORY("chat_history"),
        OPERATION("operation"),
        ;


        private String name;


        IndexEnum(String name) {
            this.name = name;
        }
    }

    private static Gson gson = null;

    static {
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.setFieldNamingPolicy(FieldNamingPolicy.LOWER_CASE_WITH_UNDERSCORES);
        gsonBuilder.setDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        gson = gsonBuilder.create();
    }

}
