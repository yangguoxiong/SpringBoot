package com.movit.utils;

/**
 * 包装类型和基本数据类型区别
 * Created by Mark on 2020/1/6 18:01.
 */
public class ShortTest {

	public static void main(String[] args) {
		Short a = 888;
		Short b = 888;
		//true.因为包装类型重写了equals方法,最后是转成普通类型来用==判断.普通类型的==判断的是值是否相同
		System.out.println(a.equals(b));
		//false.因为超过了-127 至 128之间的数字,就不再从缓存池取,所以比较的是地址值
		System.out.println(a == b);

		Short c = 10;
		Short d = 10;
		//true.再-127 至 128之间数字,从缓存池取的事同一个对象,所以是true
		System.out.println(c == d);
	}
}
