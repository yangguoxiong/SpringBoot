package com.movit.event.bus;

import lombok.Data;

import java.io.Serializable;

/**
 * 异步参数类
 */
@Data
public class InitEvent implements Serializable {

    private static final long serialVersionUID = 4644443286270475185L;

    private String userId;

    private String userLevelInterestsBody;
}
