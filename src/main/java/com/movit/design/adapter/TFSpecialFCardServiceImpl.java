package com.movit.design.adapter;

/**
 * @author: yangguoxiong
 * @date: 2021/1/16 17:32
 * @description: 要适配的类
 */
public class TFSpecialFCardServiceImpl implements SpecialCardService {

    @Override
    public String specialRead() {
        return "TF读卡器在读卡。。。";
    }
}
