package com.movit.utils;

import org.apache.commons.lang.time.DateUtils;
import org.joda.time.DateTime;
import org.joda.time.Duration;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;
import java.util.*;

/**
 * joda时间使用方式
 */
public class DateTimeTest {

    /*public static void main(String[] args) {
        // 获取当天剩余秒数
        //test01();

        // 查询当天时间的0时
        //test02();

        //getCurrentMonday();
        //getPreviousSunday();

    }*/

    private static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    public static void main(String args[]) throws ParseException {
        /*getCurrentMonday();
        getPreviousSunday();
        getMinMonthDate();
        getMaxMonthDate();*/
        // test04();
        // test05();
        // 获取当前时间小时数对应的最近每三小时的时间
        // test06();
        /*try {
            test07();
        } catch (ParseException e) {
            e.printStackTrace();
        }*/
        System.out.println(getDayRemainingTime(new Date(), DateUtil.strToDate("2020-12-14 17:51:00", DateUtil.PATTERN_YMDHMS)));
    }

    /**
     * 比较当前时间的时分秒是否在两个日期的时分秒内
     *
     * @param startTime
     * @param endTime
     * @return true: 当前时间的时分秒在两个日期的时分秒内(只比较时分秒)
     * 例: startDate=2020-10-10 15:10:10 endDate=2022-11-11 18:10;10 当前时间=2019-08-08 17:00:00 返回: true
     */
    public static boolean test07() throws ParseException {
        Date validStartTime = DateUtil.strToDate("2020-01-01 17:52:00", DateUtil.PATTERN_YMDHMS);
        Date validEndTime = DateUtil.strToDate("2020-01-01 20:56:00", DateUtil.PATTERN_YMDHMS);

        // 开始时间时分秒
        DateTime startDate = new DateTime(validStartTime);
        int startHour = startDate.getHourOfDay();
        int startMinute = startDate.getMinuteOfHour();
        int startSecond = startDate.getSecondOfMinute();
        // 结束时间时分秒
        DateTime endDate = new DateTime(validEndTime);
        int endHour = endDate.getHourOfDay();
        int endMinute = endDate.getMinuteOfHour();
        int endSecond = endDate.getSecondOfMinute();
        DateTime start = DateTime.now().withHourOfDay(startHour).withMinuteOfHour(startMinute).withSecondOfMinute(startSecond);
        DateTime end = DateTime.now().withHourOfDay(endHour).withMinuteOfHour(endMinute).withSecondOfMinute(endSecond);
        if (start.isBeforeNow() && end.isAfterNow()) {
            return true;
        }
        // 当前时间时分秒不在开始时间和结束时间的时分秒范围内
        return false;
    }

    private static void test06() {
        int temp = 2;
        if (temp > 24) {
            temp = 24;
        }
        int sub = 0;
        List<Integer> integers = Arrays.asList(0, 3, 6, 9, 12, 15, 18, 21, 24);
        for (Integer integer : integers) {
            if (integer == temp) {
                break;
            }
            if (integer > temp) {
                temp = sub;
                break;
            }
            sub = integer;
        }
        System.out.println(temp);
        String s = new DateTime().withTimeAtStartOfDay().plusHours(temp).toDate().toLocaleString();
        System.out.println(DateTime.now().toDate().toLocaleString());
        System.out.println(s);
        System.out.println(DateTime.now().toString());
    }

    // 获取当前时间的整点时间
    private static void test05() {
        // 获取当前时间的小时数
        int hourOfDay = DateTime.now().getHourOfDay();
        // 从当天0点加上当前时间小时数,获得当前时间的整点时间,例如 当前时间: 2020-9-8 15:04:34  当前时间的整点时间: 2020-9-8 15:00:00
        Date date = new DateTime().withTimeAtStartOfDay().plusHours(hourOfDay).toDate();
        System.out.println(date.toLocaleString());
    }

    // 获得本周一与当前日期相差的天数
    public static int getMondayPlus() {
        Calendar cd = Calendar.getInstance();
        int dayOfWeek = cd.get(Calendar.DAY_OF_WEEK);
        if (dayOfWeek == 1) {
            return -6;
        } else {
            return 2 - dayOfWeek;
        }
    }

    // 获得当前周周一0点的时间
    public static Date getCurrentMonday() {
        int mondayPlus = getMondayPlus();
        GregorianCalendar currentDate = new GregorianCalendar();
        currentDate.add(GregorianCalendar.DATE, mondayPlus);
        Date monday = currentDate.getTime();
        Date startOfDay = getStartOfDay(monday);
        System.out.println(startOfDay);
        return startOfDay;
    }

    // 获得当前周周日24点的时间
    public static Date getPreviousSunday() {
        int mondayPlus = getMondayPlus();
        GregorianCalendar currentDate = new GregorianCalendar();
        currentDate.add(GregorianCalendar.DATE, mondayPlus + 6);
        Date monday = currentDate.getTime();
        Date endOfDay = getEndOfDay(monday);
        System.out.println(endOfDay);
        return endOfDay;
    }

    // 获得当前月--开始日期
    public static Date getMinMonthDate() {
        Calendar calendar = Calendar.getInstance();
        try {
            calendar.setTime(new Date());
            calendar.set(Calendar.DAY_OF_MONTH,
                    calendar.getActualMinimum(Calendar.DAY_OF_MONTH));
            Date time = calendar.getTime();
            System.out.println(getStartOfDay(time));
            return time;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    // 获得当前月--结束日期
    public static Date getMaxMonthDate() {
        Calendar calendar = Calendar.getInstance();
        try {
            calendar.setTime(new Date());
            calendar.set(Calendar.DAY_OF_MONTH,
                    calendar.getActualMaximum(Calendar.DAY_OF_MONTH));
            Date time = calendar.getTime();
            System.out.println(getEndOfDay(time));
            return time;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    // 获得某天最大时间 2020-06-30 23:59:59
    public static Date getEndOfDay(Date date) {
        LocalDateTime localDateTime = LocalDateTime.ofInstant(Instant.ofEpochMilli(date.getTime()), ZoneId.systemDefault());
        ;
        LocalDateTime endOfDay = localDateTime.with(LocalTime.MAX);
        return Date.from(endOfDay.atZone(ZoneId.systemDefault()).toInstant());
    }

    // 获得某天最小时间 2020-06-01 00:00:00
    public static Date getStartOfDay(Date date) {
        LocalDateTime localDateTime = LocalDateTime.ofInstant(Instant.ofEpochMilli(date.getTime()), ZoneId.systemDefault());
        LocalDateTime startOfDay = localDateTime.with(LocalTime.MIN);
        return Date.from(startOfDay.atZone(ZoneId.systemDefault()).toInstant());
    }


    /**
     * 获取一天中剩余的时间（秒数）
     */
    public static Integer getDayRemainingTime(Date currentDate, Date midDate) {
        LocalDateTime midnight = LocalDateTime.ofInstant(midDate.toInstant(),
                ZoneId.systemDefault());
        LocalDateTime currentDateTime = LocalDateTime.ofInstant(currentDate.toInstant(),
                ZoneId.systemDefault());
        long seconds = ChronoUnit.SECONDS.between(currentDateTime, midnight);
        return (int) seconds;
    }

        /**
         * 获取当天剩余秒数
         */
    private static void test01() {
        //方法一
        long milliSecondsLeftToday = 86400000 - DateUtils.getFragmentInMilliseconds(Calendar.getInstance(), Calendar.DATE);
        long secondsLeftToday = 86400 - DateUtils.getFragmentInSeconds(Calendar.getInstance(), Calendar.DATE);
        System.out.println("当天剩余毫秒1：" + milliSecondsLeftToday);
        System.out.println("当天剩余秒1：" + secondsLeftToday);


        //方法二
        DateTime dateTime = new DateTime().millisOfDay().withMaximumValue();
        long millSeconds2 = new Duration(new DateTime(), dateTime).getMillis();
        long count = new Duration(new DateTime(), dateTime).getStandardSeconds();
        System.out.println("当天剩余毫秒2：" + millSeconds2);
        System.out.println("当天剩余秒2：" + count);


        //方法三:LocalDateTime和ChronoUnit为1.8新增
        LocalDateTime midnight = LocalDateTime.now().plusDays(1).withHour(0).withMinute(0).withSecond(0).withNano(0);
        long millSeconds = ChronoUnit.MILLIS.between(LocalDateTime.now(), midnight);
        long seconds = ChronoUnit.SECONDS.between(LocalDateTime.now(), midnight);
        System.out.println("当天剩余毫秒3：" + millSeconds);
        System.out.println("当天剩余秒3：" + seconds);

        // 当前时间戳
        long nowTime = System.currentTimeMillis();
        // 明天0点时间戳
        long expireTime = DateTime.now().plusDays(1).withTimeAtStartOfDay().getMillis();
        // 现在到明天0点的时间戳,也就是当天剩余时间
        System.out.println((expireTime - nowTime) / 1000);
    }

    /**
     * 查询当天时间的0时.如果创建时间大于这个时间,表示就是当天时间内的时间.
     */
    private static void test02() {
        System.out.println(new DateTime().withTimeAtStartOfDay().toString("yyyy-MM-dd HH:mm:ss"));
    }

    /**
     * 查询指定时间的那天的0点时间,和指定时间的24点时间
     */
    public static void test04() {
        DateTime dateTime = new DateTime(2020, 6, 30, 0, 0, 0);

        Date time = dateTime.toDate();

        Date newDate = new DateTime().withTimeAtStartOfDay().toDate();

        Date newDate2 = new DateTime().plusDays(1).withTimeAtStartOfDay().toDate();

        Date newDate3 = new DateTime().minusDays(new DateTime().getDayOfWeek() - 1).withTimeAtStartOfDay().toDate();//本周开始时间

        Date newDate4 = new DateTime().plusDays(8 - new DateTime().getDayOfWeek()).withTimeAtStartOfDay().toDate();//本周结束时间

        Date newDate5 = new DateTime().minusDays(new DateTime().getDayOfMonth() - 1).withTimeAtStartOfDay().toDate();//本月开始时间

        Date newDate6 = new DateTime().minusDays(new DateTime().getDayOfMonth() - 1).plusMonths(1).withTimeAtStartOfDay().toDate();//本月结束时间

        System.out.println("今天凌晨: " + newDate.toLocaleString());
        System.out.println("明天凌晨: " + newDate2.toLocaleString());
        System.out.println("本周开始时间: " + newDate3.toLocaleString());
        System.out.println("本周结束时间: " + newDate4.toLocaleString());
        System.out.println("本月开始时间: " + newDate5.toLocaleString());
        System.out.println("本月结束时间: " + newDate6.toLocaleString());
    }
}
