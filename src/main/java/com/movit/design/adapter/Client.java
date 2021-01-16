package com.movit.design.adapter;

/**
 * @author: yangguoxiong
 * @date: 2021/1/16 17:29
 * @description:
 */
public class Client {

    public static void main(String[] args) {
        // 本来只能用SD读卡器
        CardService cardService = new SDCardServiceImpl();
        System.out.println(cardService.read());

        // 用适配器, 也可以用TF读卡器
        CardAdapter adapter = new CardAdapter(new TFSpecialFCardServiceImpl());
        System.out.println(adapter.read());
    }
}
