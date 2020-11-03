package com.movit.event;

import lombok.Data;
import org.springframework.context.ApplicationEvent;

/**
 * spring异步事件
 */
@Data
public class CouponEvent extends ApplicationEvent {

    /**
     * Create a new ApplicationEvent.
     *
     * @param source the object on which the event initially occurred (never {@code null})
     */
    public CouponEvent(Object source) {
        super(source);
    }
}
