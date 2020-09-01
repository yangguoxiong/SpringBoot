package com.movit;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by Mark on 2019/11/27 12:53.
 */
public class HumpToUnderLineTest {

    public static void main(String[] args) {
        System.out.println(sqlAppend("#{id,jdbcType=BIGINT}, #{name,jdbcType=VARCHAR}, #{sendType,jdbcType=SMALLINT}, \n" +
                "      #{strategyType,jdbcType=SMALLINT}, #{orderNum,jdbcType=INTEGER}, #{content,jdbcType=VARCHAR}, \n" +
                "      #{clientType,jdbcType=SMALLINT}, #{pushType,jdbcType=SMALLINT}, #{pushTitle,jdbcType=VARCHAR}, \n" +
                "      #{userTagId,jdbcType=BIGINT}, #{extraUserId,jdbcType=VARCHAR}, #{action,jdbcType=VARCHAR}, \n" +
                "      #{pushParam,jdbcType=VARCHAR}, #{offLineDuration,jdbcType=BIGINT}, #{bigPushDuration,jdbcType=BIGINT}, \n" +
                "      #{userLevel,jdbcType=VARCHAR}, #{userType,jdbcType=SMALLINT}, #{status,jdbcType=BIGINT}, \n" +
                "      #{liveRoom,jdbcType=BIT}, #{createTime,jdbcType=TIMESTAMP}, #{updateTime,jdbcType=TIMESTAMP}, \n" +
                "      #{sendUser,jdbcType=OTHER}, #{subTitle,jdbcType=VARCHAR}, #{description,jdbcType=VARCHAR}, \n" +
                "      #{image,jdbcType=VARCHAR}, #{buttonText,jdbcType=VARCHAR}, #{buttonColor,jdbcType=VARCHAR}, \n" +
                "      #{smsChannel,jdbcType=SMALLINT}, #{smsTemplateId,jdbcType=VARCHAR}, #{smsTitle,jdbcType=VARCHAR}, \n" +
                "      #{smsParam,jdbcType=VARCHAR}, #{sendTime,jdbcType=TIMESTAMP}, #{extraCellphone,jdbcType=VARCHAR}, \n" +
                "      #{userTagName,jdbcType=VARCHAR}"));
    }

    public static String sqlAppend(String args) {
        String[] fields = args.split(", #");
        //数组转集合
        List<String> fieldsList = new ArrayList<String>(fields.length);
        Collections.addAll(fieldsList, fields);
        //定义字符串
        StringBuilder stringBuilder = new StringBuilder();
        for (String field : fieldsList) {
            //replace多余字符
            field = field.replace("{", "");
            field =  field.replace("}", "");
            //转数组
            String[] colums = field.split(",");
            String hump = colums[0];
            String columType = colums[1];
            columType = columType.replace("jdbcType=", "");
            //驼峰转下划线
            String underLine = HumpToUnderline(hump);
            String sql = "<if test=\"entity." + hump + " != null\">\n" +
                    "   and " + underLine + " = #{entity." + hump + ",jdbcType=" + columType + "}\n" +
                    "</if>\n";
            stringBuilder.append(sql);
        }
        return stringBuilder.toString();
    }


    /***
     * 下划线命名转为驼峰命名
     *
     * @param para
     *        下划线命名的字符串
     */

    public static String UnderlineToHump(String para){
        StringBuilder result=new StringBuilder();
        String a[]=para.split("_");
        for(String s:a){
            if (!para.contains("_")) {
                result.append(s);
                continue;
            }
            if(result.length()==0){
                result.append(s.toLowerCase());
            }else{
                result.append(s.substring(0, 1).toUpperCase());
                result.append(s.substring(1).toLowerCase());
            }
        }
        return result.toString();
    }

    /***
     * 驼峰命名转为下划线命名
     *
     * @param para
     *        驼峰命名的字符串
     */

    public static String HumpToUnderline(String para){
        StringBuilder sb=new StringBuilder(para);
        int temp=0;//定位
        if (!para.contains("_")) {
            for(int i=0;i<para.length();i++){
                if(Character.isUpperCase(para.charAt(i))){
                    sb.insert(i+temp, "_");
                    temp+=1;
                }
            }
        }
        return sb.toString().toUpperCase();
    }
}
