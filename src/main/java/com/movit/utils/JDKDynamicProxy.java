package com.movit.utils;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

//Spring AOP之JDK动态代理,实现InvocationHandler接口
public class JDKDynamicProxy implements InvocationHandler {

	//定义变量
	private Object target;

	//定义构造方法设置target类型
	public JDKDynamicProxy(Object target) {
		this.target = target;
	}

	@Override
	public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
		System.out.println("JDK动态代理之前拦截....");
		Object result = method.invoke(target, args);
		System.out.println("JDK动态代理之后拦截....");
		//返回创建对象
		return result;
	}
}
//定义用来JDK动态代理的接口
interface HelloWorld {
	void sayHi(String name);
}
//接口实现类
class HelloWorldImpl implements HelloWorld {

	@Override
	public void sayHi(String name) {
		System.out.println("您好: " + name);
	}
}
//测试
class JDKDynamicProxyTest {
	public static void main(String[] args) {
		//创建动态代理类
		JDKDynamicProxy jdkDynamicProxy = new JDKDynamicProxy(new HelloWorldImpl());
		//启用动态代理
		HelloWorld proxy = (HelloWorld) Proxy.newProxyInstance(JDKDynamicProxyTest.class.getClassLoader(), new Class[]{HelloWorld.class}, jdkDynamicProxy);
		//调用方法
		proxy.sayHi("Mark");
	}
}