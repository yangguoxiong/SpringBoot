package com.movit.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateToStr {
	/*日期转字符串方法*/
	public static void main(String[] args) {
		//毫秒数转成日期
		Long time = 1778l;
		Date date = new Date(time);
		//格式化日期
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String format = sdf.format(date);
		System.out.println(format);
		for (int i=0;i<30;i++){
			Date date2 = randomDate("2018-07-01","2019-07-31");
			System.out.println(new SimpleDateFormat("yyyy.MM.dd HH:mm:ss").format(date2));
		}
	}

	private static void intToDate(SimpleDateFormat simpleDateFormat) throws ParseException {
		Date date = simpleDateFormat.parse("91472");
		System.out.println(date);
	}
	private static Date randomDate(String beginDate,String endDate){
		try {
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
			Date start = format.parse(beginDate);
			Date end = format.parse(endDate);

			if(start.getTime() >= end.getTime()){
				return null;
			}
			long date = random(start.getTime(),end.getTime());
			return new Date(date);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	private static long random(long begin,long end){
		long rtn = begin + (long)(Math.random() * (end - begin));
		if(rtn == begin || rtn == end){
			return random(begin,end);
		}
		return rtn;
	}
}
