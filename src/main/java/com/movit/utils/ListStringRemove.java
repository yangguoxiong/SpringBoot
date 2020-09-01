package com.movit.utils;

import org.apache.commons.lang.StringUtils;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;

public class ListStringRemove {
	/*删除list集合的方法*/
	public static void main(String[] args) {
		List<String> stringList = new ArrayList<String>();
		stringList.add("1");
		stringList.add("2");
		stringList.add("3");
		stringList.add("4");
		// 使用foreach删除list会报错
		for (String s : stringList) {
			if (s.equals("2")) {
				stringList.remove(s);
			}
		}
		// 使用fori倒序删除没问题.但是用顺序删不完,因为list的索引变化了.
		for (int i = 0; i < stringList.size() - 1; i++) {
			if (stringList.get(i).equals("2")) {
				stringList.remove(i);
			}
		}
		// 使用iterator删除,推荐
		Iterator<String> iterator = stringList.iterator();
		while (iterator.hasNext()) {
			String next = iterator.next();
			if (next.equals("3")) {
				//注意,应该使用iterator.remove();不能使用stringList.remove(),否则报错.
				iterator.remove();
			}
		}
		System.out.println(stringList);
	}
}
