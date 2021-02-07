package com.movit.event;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

/**
 * 优惠券类
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Coupon {

    private String code;

    private List<String> userIds;

}
