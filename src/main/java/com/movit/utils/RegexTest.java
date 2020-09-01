package com.movit.utils;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 将${内容}占位符替换成指定内容
 * 
 * @Author: yangguoxiong
 * @Date: 2019/12/17
 */
public class RegexTest {

	/**
	 * 占位符正则表达式
	 */
	public static final String PLACEHOLDER_REG = "(?<=(?<!\\\\)\\$\\{)(.*?)(?=(?<!\\\\)\\})";

	public static void main(String[] args) {
		//System.out.println(placeHolder("${ssfasfasdfasdf}", "666"));
		//System.out.println(isInteger1("8848280943a2"));
		//System.out.println(isInteger2("16.6632"));
		//System.out.println(isNumber("19a9b8yqHPoHkUbzlWcQ61"));
		Short[] shorts = {1, 2, 3, 4};
		List<Short> list = Arrays.asList(shorts);
		System.out.println(list);
		for (Short s : list) {
			System.out.println(s);
		}
	}

	public static String placeHolder(String originStr, String value) {
		// 解析活动描述中的占位符
		List<String> placeholderList = matchStrings(originStr, PLACEHOLDER_REG);

		for (int i = 0, len = placeholderList.size(); i < len; i++) {
			String placeholder = placeholderList.get(i);

			originStr = StringUtils.replace(originStr, "${" + placeholder + "}", value);
		}

		return originStr;
	}

	public static List<String> matchStrings(String str, String regex) {
		List<String> list = new ArrayList();
		if (StringUtils.isBlank(str)) {
			return list;
		} else if (StringUtils.isBlank(regex)) {
			return list;
		} else {
			Pattern p = Pattern.compile(regex);
			Matcher m = p.matcher(str);

			while (m.find()) {
				list.add(m.group());
			}

			return list;
		}
	}

	/**
	 * 判断字符串是否是数字类型: 方式一
	 * @param str
	 * @return
	 */
	public static boolean isInteger1(String str) {
		Pattern pattern = Pattern.compile("^[-\\+]?[\\d]*$");
		return pattern.matcher(str).matches();
	}
	
	/**
	 * 判断字符串是否是数字类型: 方式二
	 * @param str
	 * @return
	 */
	public static boolean isInteger2(String str) {
		Pattern pattern = Pattern.compile("-?[0-9]+\\.?[0-9]*");
		return pattern.matcher(str).matches();
	}
	
	/**
	 * 判断字符串是否是数字类型: 方式三
	 * @param str
	 * @return
	 */
	public static boolean isNumber(String str) {
		// 使用java工具类
		return NumberUtils.isNumber(str);
	}
}
