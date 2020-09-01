package com.movit.utils;

import java.math.BigDecimal;

/**
 * 创建枚举类
 * @Author: yangguoxiong
 * @Date: 2019/12/17
 */
public enum EnumTest {

	/**
	 * 实例Enum对象
	 */
	MING("小明", 18),
	LI("小李", 20);

	//定义成员变量
	private String name;
	private int age;

	/**
	 * 定义构造方法
	 */
	EnumTest(String name, int age) {
		this.name = name;
		this.age = age;
	}

	/**
	 * 定义getter方法
	 */
	public String getName() {
		return this.name;
	}

	public int getAge() {
		return this.age;
	}

	public static void main(String[] args) {
		//获取EnumTest所有实例对象 .values()方法
		EnumTest[] values = EnumTest.values();
		//遍历
		for (EnumTest enumTest : values) {
			//获取成员变量
			System.out.println(enumTest.getName());
			System.out.println(enumTest.getAge());
		}

		System.out.println("-------------------------");

		System.out.println("小于等于0的值才返回true: " + (BigDecimal.valueOf(-1).compareTo(BigDecimal.ZERO) <= 0));

		System.out.println("-------------------------");

		BigDecimal bg1, bg2, bg3;
		bg1 = new BigDecimal("100.563");
		bg2 = new BigDecimal("50.56");
		bg3 = bg1.subtract(bg2);
		String str = "相减后的价格: " + bg3;
		// print bg3 value
		System.out.println( str );

		Long l1 = -1L;
		Long l2 = 9L;
		System.out.println(l1.compareTo(0L) < 0);
	}

}
