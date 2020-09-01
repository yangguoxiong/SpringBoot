package com.movit.utils;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;

//反射
public class Reflection {
	private String name;
	private List<String> dogs;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getDogs() {
		return dogs;
	}

	public void setDogs(List<String> dogs) {
		this.dogs = dogs;
	}

	public static void main(String[] args) throws ClassNotFoundException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchMethodException {
		//获取Reflection的Class对象
		Class reflection = Class.forName("com.movit.utils.Reflection");
		//获得 Reflection 类的方法
		Method[] methods = reflection.getDeclaredMethods();
		for (Method method : methods) {
			System.out.println(method.toString());
		}
		//获取 Reflection 类的所有成员属性信息
		Field[] field = reflection.getDeclaredFields();

		for (Field f : field) {
			System.out.println(f.toString());
		}
		//获取 Reflection 类的所有构造方法信息
		Constructor[] constructor = reflection.getDeclaredConstructors();
		for (Constructor c : constructor) {
			System.out.println(c.toString());
		}


		//获取 Person 类的 Class 对象
		Class clazz=Class.forName("com.movit.utils.Reflection");
		//反射创建对象方式一:使用.newInstane 方法创建对象
		Reflection r=(Reflection) clazz.newInstance();
		r.setName("梅芳");
		System.out.println(r.getName());

		//反射创建对象方式二:获取构造方法并创建对象
		Constructor c=clazz.getDeclaredConstructor();
		Reflection r1 = (Reflection)c.newInstance();
		r1.setName("洁莹");
		System.out.println(r1.getName());
	}
}
