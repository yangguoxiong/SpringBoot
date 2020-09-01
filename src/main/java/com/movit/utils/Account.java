package com.movit.utils;

//银行存取款实例：多线程共享数据,使用悲观锁 synchronized
public class Account {

	private int money;

	private Integer sort;

	public Integer getSort() {
		return this.sort;
	}

	public void setSort(Integer sort) {
		this.sort = sort;
	}

	public Account(int money){
		this.money=money;
	}

	public Account(int money, Integer sort) {
		this.money = money;
		this.sort = sort;
	}

	public int getMoney() {
		return this.money;
	}

	@Override
	public String toString() {
		return "Account{" +
				"money=" + money +
				", sort=" + sort +
				'}';
	}

	public synchronized void getMoney(int money){
		//注意这个地方必须用while循环，因为即便再存入钱也有可能比取的要少
		while(this.money<money){
			System.out.println("取款："+money+" 余额："+this.money+" 余额不足，正在等待存款......");
			try{ wait();} catch(Exception e){}
		}
		this.money=this.money-money;
		System.out.println("取出："+money+" 还剩余："+this.money);

	}

	public synchronized void setMoney(int money){

		try{ Thread.sleep(10);}catch(Exception e){}
		this.money=this.money+money;
		System.out.println("新存入："+money+" 共计："+this.money);
		notify();
	}

	public static void main(String args[]){
		Account Account=new Account(0);
		Bank b=new Bank(Account);
		Consumer c=new Consumer(Account);
		new Thread(b).start();
		new Thread(c).start();
	}
}
//存款类
class Bank implements Runnable {
	Account Account;
	public Bank(Account Account){
		this.Account=Account;
	}
	public void run(){
		while(true){
			int temp=(int)(Math.random()*1000);
			Account.setMoney(temp);
		}
	}

}
//取款类
class Consumer implements Runnable {
	Account Account;

	public Consumer(Account Account) {
		this.Account = Account;
	}

	public void run() {
		while (true) {
			int temp = (int) (Math.random() * 1000);
			Account.getMoney(temp);
		}
	}
}