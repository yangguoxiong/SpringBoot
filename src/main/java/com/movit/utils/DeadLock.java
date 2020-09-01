package com.movit.utils;

/**
 * 一个简单的死锁类
 * 当DeadLock类的对象flag==1时（td1），先锁定o1,睡眠500毫秒
 * 而td1在睡眠的时候另一个flag==0的对象（td2）线程启动，先锁定o2,睡眠500毫秒
 * td1睡眠结束后需要锁定o2才能继续执行，而此时o2已被td2锁定；
 * td2睡眠结束后需要锁定o1才能继续执行，而此时o1已被td1锁定；
 * td1、td2相互等待，都需要得到对方锁定的资源才能继续执行，从而死锁。
 */
public class DeadLock implements Runnable {
	/*public int flag = 1;
	//静态对象是类的所有对象共享的
	private static Object o1 = new Object(), o2 = new Object();
	@Override
	public void run() {
		System.out.println("flag=" + flag);
		if (flag == 1) {
			synchronized (o1) {
				try {
					Thread.sleep(500);
				} catch (Exception e) {
					e.printStackTrace();
				}
				//此线程休眠结束后,需要02对象释放了锁,才能继续.
				synchronized (o2) {
					System.out.println("1");
				}
			}
		}
		if (flag == 0) {
			synchronized (o2) {
				try {
					Thread.sleep(500);
				} catch (Exception e) {
					e.printStackTrace();
				}
				//此线程朽迈呢结束后,需要01对象释放了锁,才能继续.
				synchronized (o1) {
					System.out.println("0");
				}
			}
		}
	}

	public static void main(String[] args) {
		DeadLock td1 = new DeadLock();
		DeadLock td2 = new DeadLock();
		td1.flag = 1;
		td2.flag = 0;
		//td1,td2都处于可执行状态，但JVM线程调度先执行哪个线程是不确定的。
		//td2的run()可能在td1的run()之前运行
		new Thread(td1).start();
		new Thread(td2).start();
	}*/


	//1.定义两个不同线程标识
	private int flag;

	//2.定义两个不同线程锁对象
	private static Object obj1 = new Object();
	private static Object obj2 = new Object();

	//3.重写run方法
	@Override
	public void run() {
		//4.判断线程标识
		if (flag == 1) {
			System.out.println("线程flag1在执行....");
			//5.锁定线程锁对象1
			synchronized (obj1) {
				//6.休眠
				try {
					System.out.println("执行线程锁对象obj1....");
					Thread.sleep(500);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
				//7.休眠结束,获取线程锁对象2
				synchronized (obj2) {
					System.out.println("执行线程锁对象obj2....");
				}
			}
		}
		if (flag == 0) {
			System.out.println("线程flag0在执行....");
			//8.锁定线程锁对象2
			synchronized (obj2) {
				//9.休眠
				try {
					System.out.println("执行线程锁对象obj2....");
					Thread.sleep(500);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
				//10.休眠结束,获取线程锁对象1
				synchronized (obj1) {
					System.out.println("执行线程锁对象obj1....");
				}
			}
		}
	}

	//测试main方法
	public static void main(String[] args) {
		//1.创建两个线程
		DeadLock dl1 = new DeadLock();
		DeadLock dl2 = new DeadLock();
		//2.设置不同线程标识
		dl1.flag = 1;
		dl2.flag = 0;
		//3.开启两个线程
		new Thread(dl1).start();
		new Thread(dl2).start();
	}

}
