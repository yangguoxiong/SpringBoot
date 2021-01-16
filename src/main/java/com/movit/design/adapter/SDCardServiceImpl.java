package com.movit.design.adapter;

/**
 * @author: yangguoxiong
 * @date: 2021/1/16 17:26
 * @description: SD读卡器
 */
public class SDCardServiceImpl implements CardService {

    @Override
    public String read() {
        return "SD读卡器在读卡。。。";
    }
}
