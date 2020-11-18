package com.movit.utils;

import org.apache.commons.lang3.StringUtils;

import java.util.Date;
import java.util.UUID;

/**
 * 创建全局唯一订单ID主键(创建订单code方式)
 */
public class OrderCodeTest {
    public static void main(String[] args) {
        String randomCode = randomCode("ZB-", "yyyyMMdd");
        System.out.println(randomCode);
    }

    public static String randomCode(String prefix, String dateFormat) {

        long uuidHashCode = UUID.randomUUID().toString().hashCode();

        //有可能为负数 ，负数取反
        uuidHashCode = uuidHashCode < 0 ? -uuidHashCode : uuidHashCode;

        String uuid = String.valueOf(uuidHashCode);
        System.out.println(uuid);
        StringBuffer code = new StringBuffer();
        code.append(prefix).append(DateUtil.getStr(new Date(), dateFormat));
        code.append(StringUtils.substring(uuid, 0, uuid.length() - 3));
        code.append(StringUtils.substring(uuid, uuid.length() - 3, uuid.length()));
        return code.toString();
    }
}
