package com.movit.utils;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Stream排序
 *
 * @Author: ygx
 * @Date: 2020/3/6
 */
public class StreamSortTest {

    public static void main(String[] args) {

        test01();
    }

    /**
     * 根据指定名字固定排序: 观看直播间10分钟->分享直播间->收藏一口价宝贝->评论动态->点赞动态
     */
    private static void test01() {
        List<Obj> list = Arrays.asList(
                new Obj("点赞动态", new BigDecimal("1216.23")),
                new Obj("观看直播10分钟", new BigDecimal("123.23")),
                new Obj("评论动态", new BigDecimal("125.23")),
                new Obj("收藏一口价宝贝", new BigDecimal("125.23")),
                new Obj("分享直播间", new BigDecimal("125.23"))
        );


        String liveWatch10M = "观看直播10分钟";
        String shareLive = "分享直播间";
        String favoriteOnePrice = "收藏一口价宝贝";
        String commentDynamic = "评论动态";
        String likeDynamic = "点赞动态";
        List<Obj> collect = list.stream()
                .sorted(
                        //先按照name排序（模拟需求的a属性排序）
                        Comparator.comparing(Obj::getName, (x, y) -> {
                            if (liveWatch10M.equals(x) || liveWatch10M.equals(y)) {
                                if (liveWatch10M.equals(x)) {
                                    return -1;
                                } else {
                                    return 1;
                                }
                            } else if (shareLive.equals(x) || shareLive.equals(y)) {
                                if (shareLive.equals(x)) {
                                    return -1;
                                } else {
                                    return 1;
                                }
                            } else if (favoriteOnePrice.equals(x) || favoriteOnePrice.equals(y)) {
                                if (favoriteOnePrice.equals(x)) {
                                    return -1;
                                } else {
                                    return 1;
                                }
                            } else if (commentDynamic.equals(x) || commentDynamic.equals(y)) {
                                if (commentDynamic.equals(x)) {
                                    return -1;
                                } else {
                                    return 1;
                                }
                            } else if (likeDynamic.equals(x) || likeDynamic.equals(y)) {
                                if (likeDynamic.equals(x)) {
                                    return -1;
                                } else {
                                    return 1;
                                }
                            }
                            return 0;
                        })).collect(Collectors.toList());
        collect.stream().forEach(s -> System.out.println(s));

    }

    static class Obj {
        private String name;
        private BigDecimal price;

        public Obj(String name, BigDecimal price) {
            this.name = name;
            this.price = price;
        }

        public Obj() {

        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public BigDecimal getPrice() {
            return price;
        }

        public void setPrice(BigDecimal price) {
            this.price = price;
        }

        @Override
        public String toString() {
            return "Obj [name=" + name + ", price=" + price + "]";
        }

    }
}
