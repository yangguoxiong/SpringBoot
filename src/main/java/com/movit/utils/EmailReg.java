package com.movit.utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EmailReg {
	/*邮箱校验*/
	public static void main(String[] args) {
		String reg = "^((?=.*\\d)(?=.*[A-Z])(?=.*[a-z])[\\p{Alnum}\\p{Punct}]{6,6})$";
		Pattern compile = Pattern.compile(reg);
		Matcher matcher = compile.matcher("Ab1234");
		while (matcher.find()) {
			String group = matcher.group();
			System.out.println(group);
		}
	}
}
