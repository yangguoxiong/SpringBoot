package com.movit.event;

import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

/**
 * 异步监听处理事件
 */
@Component
public class CouponListener implements ApplicationListener<CouponEvent> {

    /**
     * 重写onApplicationEvent方法.获得异步事件对象
     * @param event
     */
    @Override
    public void onApplicationEvent(CouponEvent event) {
        Coupon source = (Coupon) event.getSource();
        System.out.println("异步处理的优惠券code: " + source.getCode());
        for (String userId : source.getUserIds()) {
            System.out.println("需要发优惠券的用户id: " + userId);
        }
    }
}
