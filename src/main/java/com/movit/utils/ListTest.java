package com.movit.utils;

import com.google.common.collect.Lists;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;


public class ListTest {

    public static void main(String[] args) {
	    // test03();
        test04();
    }

    private static void test04() {
        List<String> list = Arrays.asList("1", "2", "3", "4", "5", "6");
        List<String> newList = Lists.newArrayList();
        for (int i = ((3 - 1) * 2); i < list.size(); i++) {
            newList.add(list.get(i));
            if (newList.size() == 2) {
                break;
            }
        }
        newList.stream().forEach(System.out::println);
    }

    private static void test03() {
		List<String> list = Arrays.asList("1", "2", "999", "3");
		int indexOf = list.indexOf("2");
		// 将指定索引的元素排在最前面
		Collections.swap(list, indexOf, 0);
		list.stream().forEach(System.out::println);
	}

	public static void test01() {
        List<String> list = new ArrayList<>();
        list.add("1");
        list.add("2");
        int index = 0;
        do {
            System.out.println(list.get(index));
            index++;
        } while (index < list.size());
    }

    public static void test02() {
        PointTypeEnum[] values = PointTypeEnum.values();
        List<PointTypeEnum> arrayList = new ArrayList<>(Arrays.asList(values));
        boolean validEnum = arrayList.contains(2);
        System.out.println(validEnum);
    }

    public enum PointTypeEnum {

        全部积分操作记录(0),
        获得积分操作记录(1),
        支出积分操作记录(2);

        private int type;

        public int getType() {
            return this.type;
        }

        private PointTypeEnum(int type) {
            this.type = type;
        }
    }
}
