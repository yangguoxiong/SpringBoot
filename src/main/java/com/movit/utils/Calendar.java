package com.movit.utils;

import java.util.Date;

public class Calendar {
	public static void main(String[] args) {
		/*日期方法*/
		java.util.Calendar cal = java.util.Calendar.getInstance();
		System.out.println(cal);
		cal.add(java.util.Calendar.DATE, -1);
		cal.set(java.util.Calendar.MINUTE, 59);
		cal.set(java.util.Calendar.SECOND, 59);
		cal.set(java.util.Calendar.HOUR_OF_DAY, 23);
		Date expiryDate = cal.getTime();
		System.out.println(expiryDate.before(new Date()));
	}
}
