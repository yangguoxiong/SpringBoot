package com.movit.design.adapter;

/**
 * 对象适配器模式, 实现要适配接口, 调用适配方法
 *
 * @author: yangguoxiong
 * @date: 2021/1/16 17:33
 * @description: 适配器类.使得TF读卡器也能适配SD读卡器接口
 */
public class CardAdapter implements CardService {

    private SpecialCardService specialCardService;

    public CardAdapter(SpecialCardService specialCardService) {
        this.specialCardService = specialCardService;
    }

    /**
     * 适配器类去实现要适配的接口类, 重写方法的时候, 调用适配的方法
     *
     * @return
     */
    @Override
    public String read() {
        System.out.println("适配器模式, 将SD读卡方法适配到TF读卡");
        return specialCardService.specialRead();
    }
}
