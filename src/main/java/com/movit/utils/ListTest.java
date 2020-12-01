package com.movit.utils;

import org.apache.commons.lang3.EnumUtils;

import java.math.BigDecimal;
import java.util.*;


public class ListTest {

    public static void main(String[] args) {
	    test03();
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
