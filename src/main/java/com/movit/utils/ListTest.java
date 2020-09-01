package com.movit.utils;

import org.apache.commons.lang3.EnumUtils;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;


public class ListTest {

	/*do while方法测试*/
	public static void main(String[] args) {
		/*List<String> list = new ArrayList<>();
		list.add("1");
		list.add("2");
		int index = 0;
		do {
			System.out.println(list.get(index));
			index ++;
		}while (index < list.size());*/
		PointTypeEnum[] values = PointTypeEnum.values();
		List<PointTypeEnum> arrayList = new ArrayList<>(Arrays.asList(values));
		boolean validEnum = arrayList.contains(2);
		System.out.println(validEnum);
	}

	/*String是null做equals会报异常的方法*/
	public static void testNullPointException() {
		String nu = null;
		if (nu.equals("3")) {
			System.out.println("test fail");
		}
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
