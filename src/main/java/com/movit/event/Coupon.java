package com.movit.event;

import lombok.Data;

import java.util.List;

/**
 * 优惠券类
 */
@Data
public class Coupon {

    private String code;

    private List<String> userIds;

}
