package com.movit.utils;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.*;
import org.springframework.stereotype.Component;

import java.util.Arrays;

//定义业务类
@Component
class CalService {
	public int calculate(int i, int j) {
		System.out.println("业务类方法");
		return i/j;
	}
}

//定义切面类
@Aspect //表示支持切面
@Component
class LogAspect {
	//定义要切面的方法,*表示CalService类的所有方法
	@Pointcut("execution(public int com.movit.utils.CalService.*(..))")
	public void pointCut(){

	}

	//前置通知
	@Before("pointCut()")
	public void logStart(JoinPoint joinPoint) {
		System.out.println("------前置通知------参数列表是:{"+Arrays.asList(joinPoint.getArgs())+"} 方法名:" + joinPoint.getSignature().getName());
	}

	//后置通知
	@After("pointCut()")
	public void logAfter(JoinPoint joinPoint) {
		System.out.println("------后置通知------" + "方法名:" + joinPoint.getSignature().getName());
	}

	//后置返回
	@AfterReturning(value="pointCut()",returning="result")
	public void logReturn(Object result){
		System.out.println("------后置正常返回: 运行结果是:{"+result+"}------");
	}

	//后置异常返回
	@AfterThrowing(value="pointCut()", throwing="exception")
	public void logException(Exception exception) {
		System.out.println("------后置异常返回: 异常信息是:{"+exception+"}------");
	}

	//环绕通知
	@Around("pointCut()")
	public Object Around(ProceedingJoinPoint proceedingJoinPoint) throws Throwable{
		System.out.println("------环绕通知: 执行目标方法之前------");
		Object obj = proceedingJoinPoint.proceed();//相当于开始调calculate的广发
		System.out.println("------环绕通知: 执行目标方法之后------");
		return obj;
	}
	/*
	* 注意点：
	1）使用@Pointcut避免重复定义，并使用正则*表示包或类里面的所有方法都进行切入
	2）指定方法时，需要指定原型
	3）切面类需要加Aspect
	4）注意获取业务类方法名、参数、结果、异常信息的方法
	* */
}

//定义配置类,将切面类和CalService加入spring容器
@Configuration
@ComponentScan("com.movit.utils")//开启注解扫描,那些写了@Component注解的类都会扫描并注入到spring容器
@EnableAspectJAutoProxy //加@EnableAspectJAutoProxy开启AOP模式
class CalConfig {

}

//使用注解方式实现Spring AOP
public class SpringAOP {
	public static void main(String[] args) {
		AnnotationConfigApplicationContext cx = new AnnotationConfigApplicationContext(CalConfig.class);
		CalService calService = cx.getBean(CalService.class);
		int result = calService.calculate(10, 2);
		//int result = calService.calculate(10, 0);执行这行会报错,后置异常返回
		cx.close();
	}

}
