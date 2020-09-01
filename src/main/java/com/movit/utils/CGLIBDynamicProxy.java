package com.movit.utils;

import org.springframework.cglib.core.DebuggingClassWriter;
import org.springframework.cglib.proxy.Enhancer;
import org.springframework.cglib.proxy.MethodInterceptor;
import org.springframework.cglib.proxy.MethodProxy;

import java.lang.reflect.Method;

//CGLIB动态代理,可以代理类方法,实现MethodInterceptor
public class CGLIBDynamicProxy implements MethodInterceptor {

	/**
	 * sub：cglib生成的代理对象
	 * method：被代理对象方法
	 * objects：方法入参
	 * methodProxy: 代理方法
	 **/
	@Override
	public Object intercept(Object sub, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
		System.out.println("CGLIB插入前置通知.....");
		Object object = methodProxy.invokeSuper(sub, objects);
		System.out.println("CGLIB插入后置通知.....");
		return object;
	}
}

//定义service类,这个是类,没有实现任何接口
class UserService {

	public UserService() {
		System.out.println("实例化了Userservice....");
	}
	/**
	 * 该方法不能被子类覆盖,Cglib是无法代理final修饰的方法的
	 */
	final public String sayOthers(String name) {
		System.out.println("HelloService:sayOthers>>"+name);
		return null;
	}
	void sayHi(String name) {
		System.out.println("您好: " + name);
	}
}
//测试类
class CGLIBProxyTest {
	public static void main(String[] args) {
		// 代理类class文件存入本地磁盘方便我们反编译查看源码
		System.setProperty(DebuggingClassWriter.DEBUG_LOCATION_PROPERTY, "D:\\CGLIB");
		// 通过CGLIB动态代理获取对象的过程
		Enhancer enhancer = new Enhancer();
		enhancer.setSuperclass(UserService.class);
		// 设置回调函数
		enhancer.setCallback(new CGLIBDynamicProxy());
		// 创建代理对象
		UserService proxy = (UserService) enhancer.create();
		// 通过代理对象调用目标方法
		proxy.sayHi("Mark");
	}
}