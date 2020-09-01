package com.movit.utils;

import com.google.common.base.CaseFormat;
import org.apache.commons.lang.StringUtils;

/**
 * 将表字段转换成selectCondition语句
 * 1.复制mapper.xml中BaseResultMap下面的的<result ...内容
 * 2.用Alt方法去除第二行开始,往下的<result前面的空格.  或者在mapper.xml文件中,将<result全部的格式化到最左边,再复制过来就可以了.
 * 3.执行转换方法
 *
 * @Author: yangguoxiong
 * @Date: 2019/12/16
 */
public class SqlConditionTest {

	public static void main(String[] args) {
		convertToCondition("<result column=\"user_id\" property=\"userId\" jdbcType=\"VARCHAR\" />\n" +
				"<result column=\"task_code\" property=\"taskCode\" jdbcType=\"VARCHAR\" />\n" +
				"<result column=\"task_name\" property=\"taskName\" jdbcType=\"VARCHAR\" />\n" +
				"<result column=\"point\" property=\"point\" jdbcType=\"BIGINT\" />\n" +
				"<result column=\"previous_point\" property=\"previousPoint\" jdbcType=\"BIGINT\" />\n" +
				"<result column=\"current_point\" property=\"currentPoint\" jdbcType=\"BIGINT\" />\n" +
				"<result column=\"remark\" property=\"remark\" jdbcType=\"VARCHAR\" />\n" +
				"<result column=\"create_time\" property=\"createTime\" jdbcType=\"TIMESTAMP\" />\n" +
				"<result column=\"update_time\" property=\"updateTime\" jdbcType=\"TIMESTAMP\" />\n" +
				"<result column=\"detail\" property=\"detail\" jdbcType=\"OTHER\" />");

		//convertUnderLineAndHump("create_time");
	}

	/**
	 * 将result的表字段转成sql条件查询的if语句
	 *
	 * @param sql
	 */
	private static void convertToCondition(String sql) {
		// \n截取每个result字段
		String[] strings = sql.split("\n");
		String sqlCondition = "  <!-- 条件查询-->\n" +
				"  <sql id=\"selectCondition\">\n" +
				"      <where>\n" +
				"        <trim suffixOverrides=\"and\">\n" +
				"          <if test=\"entity != null\">\n";
		for (String string : strings) {
			// \"截取下划线,驼峰,字段类型
			String[] columns = string.split("\"");
			//下划线字段值
			String underLine = "";
			//驼峰字段值
			String hump = "";
			//字段类型值
			String columnType = "";
			for (int i = 0; i < columns.length; i++) {
				//下划线字段值
				underLine = columns[1];
				//驼峰字段值
				hump = columns[3];
				//字段类型值
				columnType = columns[5];
			}
			if (StringUtils.equals(columnType, "OTHER")) {
				sqlCondition += "          <if test=\"entity." + hump + " != null\" >\n" +
						"             and " + underLine + " = #{entity." + hump + ",jdbcType=" + columnType + ",typeHandler=com.duizhuang.base.bean.JSONBTypeHandler}\n" +
						"          </if>\n";
			} else {
				sqlCondition += "          <if test=\"entity." + hump + " != null\" >\n" +
						"             and " + underLine + " = #{entity." + hump + ",jdbcType=" + columnType + "}\n" +
						"          </if>\n";
			}
		}
		sqlCondition += "        </if>\n" +
				"      </trim>\n" +
				"      <trim suffixOverrides=\"and\">\n" +
				"        <if test=\"whereSql!=null\">\n" +
				"          and ${whereSql}\n" +
				"        </if>\n" +
				"      </trim>\n" +
				"    </where>\n" +
				"  </sql>";
		System.out.println(sqlCondition);
	}

	/**
	 * 使用CaseFormat工具类,对下划线和驼峰命名转换
	 *
	 * @param s
	 */
	private static void convertUnderLineAndHump(String s) {
		System.out.println(CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.LOWER_CAMEL, s));
	}
}
