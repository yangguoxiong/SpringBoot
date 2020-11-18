package com.movit.utils;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.TreeSet;
import java.util.stream.Collectors;

import com.movit.bean.Mark;
import org.springframework.beans.BeanUtils;

/**
 * @Author: yangguoxiong
 * @Date: 2019/12/14
 * Lambda测试类
 */
public class LambdaTest {

    public static void main(String[] args) {
        List<Account> list = new ArrayList<Account>();
        list.add(new Account(1, 90));
        list.add(new Account(2, 89));
        list.add(new Account(3, 100));
        list.add(new Account(4, 580));
        list.add(new Account(5, 820));
        list.add(new Account(6, 90));
        list.add(new Account(7, 99));
        list.add(new Account(8, 50));
        //listSort(list);
        //treeSetSort();
        //removeIfMethod(list);
        //testForeach(list);
        //foreachUpdate(list);
        //testSkip(list, 3, 3);
        // testUpdate(list);
        testSorted(list);
    }

    private static void testUpdate(List<Account> list) {
        Account account = new Account(8, 909);
        for (int i = 0; i < list.size(); i++) {
            Account acc = list.get(i);
            if (acc.getMoney() == account.getMoney()) {
                list.set(i, account);
            }
        }
        list.forEach(System.out::println);
    }

    private static void testSkip(List<Account> list, int page, int limit) {
        list = list.stream()
                .skip((page - 1) * limit)
                .limit(limit)
                .collect(Collectors.toList());
        list.forEach(System.out::println);
    }

    /**
     * 测试list排序
     */
    private static void listSort(List<Account> list) {
        //升序排序
        list.sort((account1, account2) -> account1.getMoney() - account2.getMoney());
        foreachMethod(list);
    }


    /**
     * 测试treeSet排序
     */
    private static void treeSetSort() {
        //创建升序排序的treeSeT集合,因为treeSet会去重,所以只有一个2的Account会输出
        TreeSet<Account> list = new TreeSet<Account>((a1, a2) -> a1.getMoney() - a2.getMoney());
        list.add(new Account(10));
        list.add(new Account(89));
        list.add(new Account(2));
        list.add(new Account(899));
        list.add(new Account(54));
        list.add(new Account(33));
        list.add(new Account(2));
        list.add(new Account(8));
        //lambda表达式循环输出
        list.forEach(System.out::println);
    }

    /**
     * 测试foreach
     */
    private static void foreachMethod(List<Account> list) {
        //:: 是方法引用,如果是静态方法,用类名引用,如果是普通方法,用new出来的对象引用
        list.forEach(System.out::println);
    }


    /**
     * 测试removeIf
     */
    private static void removeIfMethod(List<Account> list) {
        //满足lambda表达式,则删除,省去了要使用iterator方式去删除list
        list.removeIf(acc -> acc.getMoney() > 50);
        list.forEach(System.out::println);
    }

    /**
     * 测试循环更新list对象
     */
    private static void foreachUpdate(List<Account> list) {
        Account account = new Account(2, 180);
        for (Account acc : list) {
            if (acc.getMoney() == account.getMoney()) {
                BeanUtils.copyProperties(account, acc);
                break;
            }
        }
        list.forEach(System.out::println);
    }

	/**
	 * 测试stream的排序,先按sort字段排序,如果一样,再按money排序
	 *
	 * @param list
	 */
	private static void testSorted(List<Account> list) {
		list = list.stream().sorted((Comparator.comparingInt(Account::getSort)).thenComparingInt(Account::getMoney).reversed()).collect(Collectors.toList());
		list.forEach(System.out::println);
	}
}
