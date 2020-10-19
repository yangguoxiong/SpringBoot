package com.movit.utils;

import org.apache.commons.lang3.time.FastDateFormat;
import org.joda.time.DateTime;
import org.joda.time.Period;
import org.joda.time.PeriodType;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.text.ParseException;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Objects;

/**
 * @author walter
 */
public class DateUtil {

    public static final String PATTERN_YMDHMS = "yyyy-MM-dd HH:mm:ss";
    public static final String PATTERN_YMD = "yyyy-MM-dd";
    public static final String PATTERN_HMS = "HH:mm:ss";
    public static final String PATTERN_HM = "HH:mm";
    public static final String PATTERN_YMDH = "yyyyMMddHH";

    /**
     * 获取系统当前时间，返回Timestamp类型
     *
     * @return
     */
    public static Timestamp getCurrentTimestamp() {
        return new Timestamp(System.currentTimeMillis());
    }

    /**
     * 获取系统当前日期，返回String"yyyy-MM-dd HH:mm:ss"格式
     *
     * @return
     */
    public static String getCurrentDateStr() {
        Date date = new Date();
        return getYMDHMS(date);
    }

    /**
     * 通过String格式得到Timestamp
     *
     * @param str 格式必须为"yyyy-mm-dd hh:mm:ss"
     * @return
     * @throws ParseException
     */
    public static Timestamp strToTimestamp(String str) throws ParseException {
        if (null == str || "".equals(str)) {
            return null;
        } else {
            str += ".0";
        }
        Timestamp ts = Timestamp.valueOf(str);
        return ts;
    }

    /**
     * 通过String格式得到Date——通过format定义格式
     *
     * @param str
     * @param format
     * @return
     * @throws ParseException
     */
    public static Date strToDate(String str, String format) throws ParseException {
        if (null == str || "".equals(str)) {
            return null;
        }
        FastDateFormat sdf = FastDateFormat.getInstance(format);
        return sdf.parse(str);
    }

    /**
     * Date格式化为String类型——通过format自定义格式
     *
     * @param date
     * @param format 格式 如"yyyy-MM-dd hh:mm:ss"
     * @return
     */
    public static String getStr(Date date, String format) {
        FastDateFormat sdf = FastDateFormat.getInstance(format);
        return sdf.format(date);
    }

    /**
     * Date转换为String，格式为"yyyy-MM-dd HH:mm:ss"
     *
     * @param date
     * @return
     */
    public static String getYMDHMS(Date date) {
        FastDateFormat sdf = FastDateFormat.getInstance(PATTERN_YMDHMS);
        return sdf.format(date);
    }

    /**
     * Date转换为String，格式为"yyyy-MM-dd HH:mm:ss"
     *
     * @param date
     * @return
     */
    public static String getYMDHMSNonNull(Date date) {

        if (null == date) {
            return "";
        }
        FastDateFormat sdf = FastDateFormat.getInstance(PATTERN_YMDHMS);
        return sdf.format(date);
    }

    /**
     * Date转换为String，格式为"yyyy-MM-dd"
     *
     * @param date
     * @return
     */
    public static String getYMD(Date date) {
        FastDateFormat sdf = FastDateFormat.getInstance(PATTERN_YMD);
        return sdf.format(date);
    }

    /**
     * Date转换为String，格式为"hh:mm:ss"
     *
     * @param date
     * @return
     */
    public static String getHMS(Date date) {
        FastDateFormat sdf = FastDateFormat.getInstance(PATTERN_HMS);
        return sdf.format(date);
    }

    /**
     * Date转换为String，格式为"hh:mm"
     *
     * @param date
     * @return
     */
    public static String getHM(Date date) {
        FastDateFormat sdf = FastDateFormat.getInstance(PATTERN_HM);
        return sdf.format(date);
    }

    //	获取年月日时分秒
    public static int getYear(Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        return c.get(Calendar.YEAR);
    }

    public static int getMonth(Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        return c.get(Calendar.MONTH) + 1;
    }

    public static int getDay(Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        return c.get(Calendar.DATE);
    }

    public static int getHour(Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        return c.get(Calendar.HOUR_OF_DAY);
    }

    public static int getMinute(Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        return c.get(Calendar.MINUTE);
    }

    public static int getSecond(Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        return c.get(Calendar.SECOND);
    }


    /**
     * 返回一星期的第几天，如星期一则返回1
     *
     * @param date
     * @return
     */
    public static int getWeek(Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        return c.get(Calendar.DAY_OF_WEEK) - 1;
    }

    /**
     * 返回中文星期，如"星期一"
     *
     * @param date
     * @return
     */
    public static String getChineseWeek(Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        switch (c.get(Calendar.DAY_OF_WEEK)) {
            case 1:
                return "星期日";
            case 2:
                return "星期一";
            case 3:
                return "星期二";
            case 4:
                return "星期三";
            case 5:
                return "星期四";
            case 6:
                return "星期五";
            case 7:
                return "星期六";
            default:
                return "未知";

        }
    }

    //日期计算

    /**
     * 年数加n（n可以为负数）
     *
     * @param date
     * @return
     */
    public static Timestamp addYear(Date date, int n) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(Calendar.YEAR, n);
        return new Timestamp(c.getTime().getTime());
    }

    /**
     * 月数加n（n可以为负数）
     *
     * @param date
     * @return
     */
    public static Timestamp addMonth(Date date, int n) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(Calendar.MONTH, n);
        return new Timestamp(c.getTime().getTime());
    }

    /**
     * 天数加n（n可以为负数）
     *
     * @param date
     * @return
     */
    public static Timestamp addDay(Date date, int n) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(Calendar.DATE, n);
        return new Timestamp(c.getTime().getTime());
    }

    /**
     * 小时加n（n可以为负数）
     *
     * @param date
     * @return
     */
    public static Timestamp addHour(Date date, int n) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(Calendar.HOUR, n);
        return new Timestamp(c.getTime().getTime());
    }

    /**
     * 分钟加n（n可以为负数）
     *
     * @param date
     * @return
     */
    public static Timestamp addMinute(Date date, int n) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(Calendar.MINUTE, n);
        return new Timestamp(c.getTime().getTime());
    }

    /**
     * 秒数加n（n可以为负数）
     *
     * @param date
     * @return
     */
    public static Timestamp addSecond(Date date, int n) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(Calendar.SECOND, n);
        return new Timestamp(c.getTime().getTime());
    }

    /**
     * 计算两个日期相差的天数，只考虑年月日，不考虑时分秒(如果加上时分秒，可能导致天数计算错误)
     *
     * @param before
     * @param after
     * @return int 相差的天数，有可能为负数
     */
    public static int getDateDiff(Date before, Date after) {
        if (before == null || after == null) {
            return 0;
        }
        Calendar calendar1 = Calendar.getInstance();
        Calendar calendar2 = Calendar.getInstance();
        calendar1.setTime(before);
        calendar1.set(Calendar.HOUR_OF_DAY, 0);
        calendar1.set(Calendar.MINUTE, 0);
        calendar1.set(Calendar.SECOND, 0);
        calendar1.set(Calendar.MILLISECOND, 0);
        calendar2.setTime(after);
        calendar2.set(Calendar.HOUR_OF_DAY, 0);
        calendar2.set(Calendar.MINUTE, 0);
        calendar2.set(Calendar.SECOND, 0);
        calendar2.set(Calendar.MILLISECOND, 0);
        int diff = (int) ((calendar2.getTime().getTime() - calendar1.getTime().getTime()) / (24 * 60 * 60 * 1000));
        return diff;
    }

    /**
     * 计算两个日期相差的天时分
     *
     * @param endDate
     * @param nowDate
     * @return
     */
    public static String getDateDiffDHM(Date endDate, Date nowDate) {

        long nd = 1000 * 24 * 60 * 60;
        long nh = 1000 * 60 * 60;
        long nm = 1000 * 60;
        // long ns = 1000;
        // 获得两个时间的毫秒时间差异
        long diff = Math.abs(endDate.getTime() - nowDate.getTime());
        // 计算差多少天
        long day = diff / nd;
        // 计算差多少小时
        long hour = diff % nd / nh;
        // 计算差多少分钟
        long min = diff % nd % nh / nm;
        // 计算差多少秒//输出结果
        // long sec = diff % nd % nh % nm / ns;
        return day + "天" + hour + "小时" + min + "分钟";
    }

    /**
     * 计算两个日期相差的天数，不考虑日期前后，返回结果>=0
     *
     * @param before
     * @param after
     * @return
     */
    public static int getAbsDateDiff(Date before, Date after) {
        int diff = getDateDiff(before, after);
        return Math.abs(diff);
    }

    //日期比较

    /**
     * 比较第一个日期是否早于第二个日期
     * 利用了getDateDiff方法，如果两者相差天数>0,则为true;
     *
     * @param d1
     * @param d2
     * @return
     */
    public static boolean getDateIsBefore(Date d1, Date d2) {
        if (d1 == null || d2 == null) {
            return false;
        }
        int diff = getDateDiff(d1, d2);
        if (diff > 0) {
            return true;
        }
        return false;
    }

    /**
     * 比较第一个日期是否晚于第二个日期
     * 利用了getDateDiff方法，如果两者相差天数<0,则为true;
     *
     * @param d1
     * @param d2
     * @return boolean
     */
    public static boolean getDateIsAfter(Date d1, Date d2) {
        if (d1 == null || d2 == null) {
            return false;
        }
        int diff = getDateDiff(d1, d2);
        if (diff < 0) {
            return true;
        }
        return false;
    }


    /**
     * 比较是否同一个月
     *
     * @param date1
     * @param date2
     * @return
     */
    public static boolean isSameMonth(Date date1, Date date2) {
        try {
            Calendar cal1 = Calendar.getInstance();
            cal1.setTime(date1);

            Calendar cal2 = Calendar.getInstance();
            cal2.setTime(date2);

            boolean isSameYear = cal1.get(Calendar.YEAR) == cal2
                    .get(Calendar.YEAR);
            boolean isSameMonth = isSameYear
                    && cal1.get(Calendar.MONTH) == cal2.get(Calendar.MONTH);
//            boolean isSameDate = isSameMonth
//                    && cal1.get(Calendar.DAY_OF_MONTH) == cal2
//                    .get(Calendar.DAY_OF_MONTH);

            return isSameMonth;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;


    }


    /**
     * 比较是否同一天
     *
     * @param date1
     * @param date2
     * @return
     */
    public static boolean isSameDay(Date date1, Date date2) {
        try {
            Period period = new Period(
                    new DateTime(date1).withTimeAtStartOfDay(),
                    new DateTime(date2).withTimeAtStartOfDay(),
                    PeriodType.days());
            return period.getDays() == 0;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }


    public static String millSecToDate(Long millSec, String format) {
        FastDateFormat sdf = FastDateFormat.getInstance(format);
        Date date = new Date(millSec);
        return sdf.format(date);
    }

    /**
     * 是否在某个时间段内
     * <p>比较小时：如果开始时间为23，结束时间为9；则结束时间为第二天的9点</p>
     *
     * @param begin 开始的小时
     * @param end   结束的小时
     * @param hour  当前小时
     * @return the boolean
     * @outhor hlongy
     * @date 2017 -04-17 16:59:57
     */
    public static boolean isTimePeriodWithHour(int begin, int end, int hour) {
        long hourTime = new DateTime().withHourOfDay(hour).withMinuteOfHour(0).withSecondOfMinute(0).getMillis();
        long beginTime = new DateTime().withHourOfDay(begin).withMinuteOfHour(0).withSecondOfMinute(0).getMillis();
        long endTime = new DateTime().withHourOfDay(end).withMinuteOfHour(0).withSecondOfMinute(0).getMillis();

        //如果开始时间比结束时间大，则结束时间需要加上一天的时间
        if (begin > end) {
            endTime = new DateTime(endTime).plusDays(1).getMillis();
        }

        return beginTime <= hourTime && hourTime <= endTime;
    }

    /**
     * 获取当天开始时间
     *
     * @return
     */
    public static Date getDayBegin() {
        Calendar cal = new GregorianCalendar();
        cal.set(Calendar.HOUR_OF_DAY, 0);
        cal.set(Calendar.MINUTE, 0);
        cal.set(Calendar.SECOND, 0);
        cal.set(Calendar.MILLISECOND, 0);
        return cal.getTime();
    }

    /**
     * 获取当天的结束时间
     *
     * @return
     */
    public static Date getDayEnd() {
        Calendar cal = new GregorianCalendar();
        cal.set(Calendar.HOUR_OF_DAY, 23);
        cal.set(Calendar.MINUTE, 59);
        cal.set(Calendar.SECOND, 59);
        return cal.getTime();
    }

    /**
     * 获取昨天的开始时间
     *
     * @return
     */
    public static Date getBeginDayOfYesterday() {
        Calendar cal = new GregorianCalendar();
        cal.setTime(getDayBegin());
        cal.add(Calendar.DAY_OF_MONTH, -1);
        return cal.getTime();
    }

    /**
     * 获取昨天的结束时间
     *
     * @return
     */
    public static Date getEndDayOfYesterDay() {
        Calendar cal = new GregorianCalendar();
        cal.setTime(getDayEnd());
        cal.add(Calendar.DAY_OF_MONTH, -1);
        return cal.getTime();
    }

    /**
     * 获取明天的开始时间
     *
     * @return
     */
    public static Date getBeginDayOfTomorrow() {
        Calendar cal = new GregorianCalendar();
        cal.setTime(getDayBegin());
        cal.add(Calendar.DAY_OF_MONTH, 1);

        return cal.getTime();
    }

    /**
     * 获取明天的结束时间
     *
     * @return
     */
    public static Date getEndDayOfTomorrow() {
        Calendar cal = new GregorianCalendar();
        cal.setTime(getDayEnd());
        cal.add(Calendar.DAY_OF_MONTH, 1);
        return cal.getTime();
    }

    /**
     * 获取本周的开始时间
     *
     * @return
     */
    public static Date getBeginDayOfWeek() {
        Date date = new Date();
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        int dayofweek = cal.get(Calendar.DAY_OF_WEEK);
        if (dayofweek == 1) {
            dayofweek += 7;
        }
        cal.add(Calendar.DATE, 2 - dayofweek);
        return getDayStartTime(cal.getTime());
    }

    /**
     * 获取,传入参数时间那一周的开始时间
     * 传入参数为null,默认获取当前这周的开始时间
     *
     * @param date
     * @return
     */
    public static Date getStartOfWeekByDate(Date date) {
        DateTime dateTime = null;
        if (Objects.isNull(date)) {
            dateTime = DateTime.now();
        } else {
            dateTime = new DateTime(date);
        }
        return dateTime.minusDays(dateTime.getDayOfWeek() - 1).withTimeAtStartOfDay().toDate();
    }

    /**
     * 获取本周的结束时间
     *
     * @return
     */
    public static Date getEndDayOfWeek() {
        Calendar cal = Calendar.getInstance();
        cal.setTime(getBeginDayOfWeek());
        cal.add(Calendar.DAY_OF_WEEK, 6);
        Date weekEndSta = cal.getTime();
        return getDayEndTime(weekEndSta);
    }

    /**
     * 获取,传入参数时间那一周的结束时间
     * 传入参数为null,默认获取当前这周的结束时间
     *
     * @param date
     * @return
     */
    public static Date getEndOfWeekByDate(Date date) {
        DateTime dateTime = null;
        if (Objects.isNull(date)) {
            dateTime = DateTime.now();
        } else {
            dateTime = new DateTime(date);
        }
        return dateTime.plusDays(8 - dateTime.getDayOfWeek()).withTimeAtStartOfDay().toDate();
    }

    /**
     * 获取上周的开始时间
     *
     * @return
     */
    public static Date getBeginDayOfLastWeek() {
        Date date = new Date();
        if (date == null) {
            return null;
        }
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        int dayofweek = cal.get(Calendar.DAY_OF_WEEK);
        if (dayofweek == 1) {
            dayofweek += 7;
        }
        cal.add(Calendar.DATE, 2 - dayofweek - 7);
        return getDayStartTime(cal.getTime());
    }

    /**
     * 获取上周的结束时间
     *
     * @return
     */
    public static Date getEndDayOfLastWeek() {
        Calendar cal = Calendar.getInstance();
        cal.setTime(getBeginDayOfLastWeek());
        cal.add(Calendar.DAY_OF_WEEK, 6);
        Date weekEndSta = cal.getTime();
        return getDayEndTime(weekEndSta);
    }

    /**
     * 获取本月的开始时间
     */
    public static Date getBeginDayOfMonth() {
        Calendar calendar = Calendar.getInstance();
        calendar.set(getNowYear(), getNowMonth() - 1, 1);
        return getDayStartTime(calendar.getTime());
    }

    /**
     * 获取,传入参数时间那一个月的开始时间
     * 传入参数为null,默认获取当前这个月的开始时间
     *
     * @param date
     * @return
     */
    public static Date getStartOfMonthByDate(Date date) {
        DateTime dateTime = null;
        if (Objects.isNull(date)) {
            dateTime = DateTime.now();
        } else {
            dateTime = new DateTime(date);
        }
        return dateTime.minusDays(dateTime.getDayOfMonth() - 1).withTimeAtStartOfDay().toDate();
    }

    /**
     * 获取本月的结束时间
     *
     * @return
     */
    public static Date getEndDayOfMonth() {
        Calendar calendar = Calendar.getInstance();
        calendar.set(getNowYear(), getNowMonth() - 1, 1);
        int day = calendar.getActualMaximum(5);
        calendar.set(getNowYear(), getNowMonth() - 1, day);
        return getDayEndTime(calendar.getTime());
    }

    /**
     * 获取,传入参数时间那一个月的结束时间
     * 传入参数为null,默认获取当前这个月的结束时间
     *
     * @param date
     * @return
     */
    public static Date getEndOfMonthByDate(Date date) {
        DateTime dateTime = null;
        if (Objects.isNull(date)) {
            dateTime = DateTime.now();
        } else {
            dateTime = new DateTime(date);
        }
        return dateTime.minusDays(dateTime.getDayOfMonth() - 1).plusMonths(1).withTimeAtStartOfDay().toDate();
    }

    /**
     * 获取上月的开始时间
     *
     * @return
     */
    public static Date getBeginDayOfLastMonth() {
        Calendar calendar = Calendar.getInstance();
        calendar.set(getNowYear(), getNowMonth() - 2, 1);
        return getDayStartTime(calendar.getTime());
    }

    /**
     * 获取上月的结束时间
     *
     * @return
     */
    public static Date getEndDayOfLastMonth() {
        Calendar calendar = Calendar.getInstance();
        calendar.set(getNowYear(), getNowMonth() - 2, 1);
        int day = calendar.getActualMaximum(5);
        calendar.set(getNowYear(), getNowMonth() - 2, day);
        return getDayEndTime(calendar.getTime());
    }

    /**
     * 获取某个日期的开始时间
     *
     * @param d
     * @return
     */
    public static Timestamp getDayStartTime(Date d) {
        Calendar calendar = Calendar.getInstance();
        if (null != d) {
            calendar.setTime(d);
        }
        calendar.set(calendar.get(Calendar.YEAR), calendar.get(Calendar.MONTH), calendar.get(Calendar.DAY_OF_MONTH), 0, 0, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        return new Timestamp(calendar.getTimeInMillis());
    }

    /**
     * 获取某个日期的结束时间
     *
     * @param d
     * @return
     */
    public static Timestamp getDayEndTime(Date d) {
        Calendar calendar = Calendar.getInstance();
        if (null != d) {
            calendar.setTime(d);
        }
        calendar.set(calendar.get(Calendar.YEAR), calendar.get(Calendar.MONTH), calendar.get(Calendar.DAY_OF_MONTH), 23, 59, 59);
        calendar.set(Calendar.MILLISECOND, 999);
        return new Timestamp(calendar.getTimeInMillis());
    }

    /**
     * 获取本年
     *
     * @return
     */
    public static Integer getNowYear() {
        Date date = new Date();
        GregorianCalendar gc = (GregorianCalendar) Calendar.getInstance();
        gc.setTime(date);
        return Integer.valueOf(gc.get(1));
    }

    /**
     * 获取本月
     *
     * @return
     */
    public static int getNowMonth() {
        Date date = new Date();
        GregorianCalendar gc = (GregorianCalendar) Calendar.getInstance();
        gc.setTime(date);
        return gc.get(2) + 1;
    }

    /**
     * 返回某个日期前几天的日期 的开始时间
     *
     * @param date
     * @param i
     * @return
     */
    public static Date getFrontDay(Date date, int i) {
        Calendar cal = new GregorianCalendar();
        cal.setTime(date);
        cal.set(Calendar.DATE, cal.get(Calendar.DATE) - i);
        return getDayStartTime(cal.getTime());
    }

    /**
     * 返回某个日期前几天的日期 的结束时间
     *
     * @return
     */
    public static Date getEndFrontDay(Date date, int i) {
        Calendar cal = new GregorianCalendar();
        cal.setTime(date);
        cal.set(Calendar.HOUR_OF_DAY, 23);
        cal.set(Calendar.MINUTE, 59);
        cal.set(Calendar.SECOND, 59);
        cal.add(Calendar.DAY_OF_MONTH, i);
        return cal.getTime();
    }

    /**
     * 获取前后几月一号的开始时间
     *
     * @return
     */
    public static Date getFrontMonthOneDay(int i) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.MONTH, i);
        calendar.set(Calendar.DAY_OF_MONTH, 1);
        return getDayStartTime(calendar.getTime());
    }

    /**
     * 获取前后几月的开始时间
     *
     * @return
     */
    public static Date getFrontMonth(int i) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.MONTH, i);
        return getDayStartTime(calendar.getTime());
    }

    /**
     * 获取指定年月的开始时间
     *
     * @param date
     * @return
     */
    public static Date getBeginDayOfMonth(Long date) {
        Calendar c = Calendar.getInstance();
        c.setTime(new Date(date));
        c.set(Calendar.DAY_OF_MONTH, 1);
        return getDayStartTime(c.getTime());
    }

    /**
     * 获取指定年月的结束的时间
     *
     * @param date
     * @return
     */
    public static Date getEndDayOfMonth(Long date) {
        Calendar c = Calendar.getInstance();
        c.setTime(new Date(date));
        c.set(Calendar.DAY_OF_MONTH, c.getActualMaximum(Calendar.DAY_OF_MONTH));
        return getDayEndTime(c.getTime());
    }

    /**
     * 获取当月的 天数
     */

    public static int getDaysOfMonth(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        return calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
    }

    /**
     * 获取某个日期的上一小时的结束点，如10点获取9点59分59秒
     *
     * @param d
     * @return
     */
    public static Timestamp getPreviousHourEndTime(Date d) {
        Calendar calendar = Calendar.getInstance();
        if (null != d) {
            calendar.setTime(d);
        }
        //小时-1
        calendar.add(Calendar.HOUR_OF_DAY, -1);
        //设置59秒
        calendar.set(Calendar.SECOND, 59);
        //设置59分
        calendar.set(Calendar.MINUTE, 59);
        return new Timestamp(calendar.getTimeInMillis());
    }

    /**
     * 返回时间字符串："2019072821" 7月28日21点
     *
     * @param d
     * @return
     */
    public static String getYMDH(Date d) {
        FastDateFormat format = FastDateFormat.getInstance(PATTERN_YMDH);
        return format.format(d);
    }


    /**
     * 秒数转换成时间
     *
     * @param time
     * @return
     */
    public static String secToTime(long time) {
        String timeStr = null;
        long hour = 0;
        long minute = 0;
        long second = 0;
        if (time <= 0) {
            return "";
        } else {
            minute = time / 60;
            if (minute < 60) {
                timeStr = unitFormat(minute) + "分";
            } else {
                hour = minute / 60;
                if (hour > 99) {
                    return "99时59分59秒";
                }
                minute = minute % 60;
                timeStr = unitFormat(hour) + "时" + unitFormat(minute) + "分";
            }
        }
        return timeStr;
    }

    //格式化
    private static String unitFormat(long i) {
        String retStr = null;
        if (i >= 0 && i < 10) {
            retStr = "0" + Long.toString(i);
        } else {
            retStr = "" + i;
        }
        return retStr;
    }

    /**
     * 获取相隔几周 ，不足一周算一周
     *
     * @param startTime
     * @param endTime
     * @return
     */
    public static int weekCount(Date startTime, Date endTime) {
        long from = startTime.getTime();
        long to = endTime.getTime();
        BigDecimal bigDecimal = new BigDecimal(String.valueOf(to - from));
        BigDecimal bigDecimal1 = new BigDecimal(String.valueOf(1000 * 3600 * 24 * 7));
        int days = bigDecimal.divide(bigDecimal1, 0, BigDecimal.ROUND_UP).intValue();
        return days;
    }

    /**
     * 1)判断传入的时间类型参数(第一个参数)与当前时间相比的天数,是否等于传入的第二个参数的值
     * 2)第二参数'days'的定义:
     * 2.1)当要比较第一参数是否是当天,传入整数:0;
     * 2.2)当要比较第一参数在当前时间之前多少天,传入负整数(例:-1,-2,-3,-5);
     * 2.3)当要比较第一参数在当前时间之后多少天,传入正整数(例:1,2,3,5)
     *
     * @param date
     * @param days
     * @return
     */
    public static boolean isDistanceNowWithDays(Date date, int days) {
        // 空值返回false
        if (Objects.isNull(date)) {
            return false;
        }

        try {
            Period period = new Period(DateTime.now().withTimeAtStartOfDay(),
                    new DateTime(date).withTimeAtStartOfDay(),
                    PeriodType.days());

            return period.getDays() == days;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    /**
     * 比较当前时间的时分秒是否在两个日期的时分秒内
     *
     * @param startTime
     * @param endTime
     * @return true: 当前时间的时分秒在两个日期的时分秒内(只比较时分秒)
     * 例: startDate=2020-10-10 15:10:10 endDate=2022-11-11 18:10;10 当前时间=2019-08-08 17:00:00 返回: true
     */
    public static boolean isDistanceNowWithHMS(Date validStartTime, Date validEndTime) {
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

    public static void main(String[] args) {
//        System.out.println(DateUtil.getPreviousHourEndTime(new Date()));
        Date data = null;
        try {
            data = DateUtil.strToDate("2019-10-10 12:33:44", "yyyy-MM-dd HH:mm:ss");
            System.out.println(getYMD(data));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        // 测试新增方法
        // new Date(),年份参数减去默认初始值1900, 月份(0-11)减去1
        /*Date date = new Date(2020 - 1900, 06 - 1, 30);
        Date startOfWeekByDate = getStartOfWeekByDate(date);
        Date endOfWeekByDate = getEndOfWeekByDate(date);
        Date startOfMonthByDate = getStartOfMonthByDate(date);
        Date endOfMonthByDate = getEndOfMonthByDate(date);
        System.out.println("本周开始:" + DateFormat.getDateTimeInstance().format(startOfWeekByDate));
        System.out.println("本周结束:" + DateFormat.getDateTimeInstance().format(endOfWeekByDate));
        System.out.println("本月开始:" + DateFormat.getDateTimeInstance().format(startOfMonthByDate));
        System.out.println("本月开始:" + DateFormat.getDateTimeInstance().format(endOfMonthByDate));*/
    }
}