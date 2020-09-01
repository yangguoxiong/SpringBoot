package com.duizhuang.common.cache.redis;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Iterator;
import java.util.List;

/**
 * 类说明
 *
 * @Author: ygx
 * @Date: 2020/3/30
 */
public class JsonUtil {

    public static ObjectMapper objectMapper = new ObjectMapper();

    public JsonUtil() {
    }

    public static <T> T readValue(String jsonStr, Class<T> valueType) {
        try {
            return objectMapper.readValue(jsonStr, valueType);
        } catch (Exception var3) {
            var3.printStackTrace();
            return null;
        }
    }

    public static <T> T readValue(String jsonStr, TypeReference<T> valueTypeRef) {
        try {
            return objectMapper.readValue(jsonStr, valueTypeRef);
        } catch (Exception var3) {
            var3.printStackTrace();
            return null;
        }
    }

    public static String toJSon(Object object) {
        try {
            return objectMapper.writeValueAsString(object);
        } catch (Exception var2) {
            var2.printStackTrace();
            return null;
        }
    }

    public static String toJSon(Object object, boolean nonNull) {
        try {
            if (nonNull) {
                objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
            }

            return objectMapper.writeValueAsString(object);
        } catch (Exception var3) {
            var3.printStackTrace();
            return null;
        }
    }

    public static String toJSon(Object object, boolean nonNull, boolean propertiesSort) {
        try {
            if (nonNull) {
                objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
            }

            if (propertiesSort) {
                objectMapper.configure(MapperFeature.SORT_PROPERTIES_ALPHABETICALLY, true);
            }

            return objectMapper.writeValueAsString(object);
        } catch (Exception var4) {
            var4.printStackTrace();
            return null;
        }
    }

    public static Iterator<JsonNode> toIterator(String json) {
        JsonNode node = toJsonNode(json);
        return node == null ? null : node.iterator();
    }

    public static JsonNode toJsonNode(String json) {
        try {
            return objectMapper.readTree(json);
        } catch (Exception var2) {
            var2.printStackTrace();
            return null;
        }
    }

    public static List<JsonNode> findValues(String json, String key) {
        try {
            JsonNode jsonNode = objectMapper.readTree(json);
            return jsonNode.findValues(key);
        } catch (Exception var3) {
            var3.printStackTrace();
            return null;
        }
    }

    public static Object findValue(String json, String key) {
        try {
            JsonNode jsonNode = objectMapper.readTree(json);
            return jsonNode.findValue(key);
        } catch (Exception var3) {
            var3.printStackTrace();
            return null;
        }
    }

    public static String findValueAsText(String json, String key) {
        try {
            JsonNode jsonNode = objectMapper.readTree(json);
            jsonNode = jsonNode.findValue(key);
            return jsonNode == null ? "" : jsonNode.asText();
        } catch (Exception var3) {
            var3.printStackTrace();
            return null;
        }
    }

    public static String findValueAsText(String json, String key, boolean ignoreKeyCase) {
        return ignoreKeyCase ? findValueAsText(json, key.toLowerCase()) : findValueAsText(json, key);
    }

    static {
        objectMapper.configure(JsonParser.Feature.ALLOW_UNQUOTED_CONTROL_CHARS, true);
        objectMapper.configure(JsonParser.Feature.ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER, true);
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        objectMapper.getFactory().configure(com.fasterxml.jackson.core.JsonFactory.Feature.USE_THREAD_LOCAL_FOR_BUFFER_RECYCLING, false);
    }
}
