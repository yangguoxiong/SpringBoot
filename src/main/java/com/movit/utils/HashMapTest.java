package com.movit.utils;

import java.util.HashMap;
import java.util.Map;

public class HashMapTest {

	public static void main(String[] args) {
		Map<String, String> map = new HashMap<String, String>();
		map.put(null, "test");
		System.out.println(map.get(null));
	}
}
