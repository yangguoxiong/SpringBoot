package com.movit.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Date;
import java.util.Random;


public class BetchInsertData {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		final String url = "jdbc:mysql://127.0.0.1/springboot";
		final String name = "com.mysql.jdbc.Driver";
		final String user = "root";
		final String password = "root";
		Connection conn = null;
		Class.forName(name);//指定连接类型
		conn = DriverManager.getConnection(url, user, password);//获取连接
		if (conn!=null) {
			System.out.println("获取连接成功");
			insert(conn);
		}else {
			System.out.println("获取连接失败");
		}

	}
	/*批量插入数据到数据库方法*/
	public static void insert(Connection conn) {
		// 开始时间
		Long begin = new Date().getTime();
		// sql前缀
		String prefix = "INSERT INTO t_teacher (id,t_name,t_password,sex,description,pic_url,school_name,regist_date,remark) VALUES ";
		int count = 0;
		try {
			// 保存sql后缀
			StringBuffer suffix = new StringBuffer();
			// 设置事务为自动提交
			conn.setAutoCommit(true);
			// 比起st，pst会更好些
			com.mysql.jdbc.PreparedStatement pst = (com.mysql.jdbc.PreparedStatement) conn.prepareStatement("");//准备执行语句
			// 外层循环，总提交事务次数
			for (int j = 1; j <= 1000000; j++) {
				suffix = new StringBuffer();
				String fale = "man";
				if (j%2 == 0) {
					fale = "women";
				}
				String random = getRandomString();
				String password = getRandomPassword();
				// 构建SQL后缀
				suffix.append("(" + j+",'"+random+"','" +password+ "'"+ ",'" + fale +"'"+",'teacher'"+",'www.movit.com'"+",'movit higer school'"+",'"+"2016-08-12 14:43:26"+"','remark" +j +"'" +"),");
				// 构建完整SQL
				String sql = prefix + suffix.substring(0, suffix.length() - 1);
				// 添加执行SQL
				pst.addBatch(sql);
				// 执行操作
				pst.executeBatch();
				// 提交事务
				//conn.commit();
				count += 1;
			}
			// 头等连接
			pst.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		// 结束时间
		Long end = new Date().getTime();
		// 耗时
		System.out.println(count + "条数据插入花费时间 : " + (end - begin) / 1000 + " s");
		System.out.println("插入完成");
	}

	public static String getRandomString() {
		// 字符串
		String string = "";

		// 循环得到10个字母
		for (int i = 0; i < 8; i++) {

			// 得到随机字母
			char c = (char) ((Math.random() * 26) + 97);
			// 拼接成字符串
			string += (c + "");
		}
		return  string;
	}

	public static String getRandomPassword() {
		Random random = new Random();
		String result="";
		for (int i=0;i<6;i++) {
			result += random.nextInt(10);
		}
		return result;
	}
}
