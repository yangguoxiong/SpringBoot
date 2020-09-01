package com.movit.utils;

import java.util.Optional;

/**
 * 测试java8新增类Optional,这个类是为了解决NPE问题
 *
 * @Author: ygx
 * @Date: 2020/2/20
 */
public class OptionalTest {

    public static void main(String[] args) {

        test();
    }

    private static void test() {
        Account account = null;
        /* 下面代码等价于:
        if (account != null) {
            return account.getMoney();
        }BigDecimal
        return 20;*/

        // 第一种写法
        // Integer money = Optional.ofNullable(account).map(Account::getMoney).orElse(20);

        // 第二种写法
        /*
        Optional<Account> op = Optional.ofNullable(account);
        if (op.isPresent()) {
            return op.get().getMoney();
        }
        return 20;*/

        // 这里,奔雷account就是null了,可是做filter是不会报错的,因为filter方法先对account进行判断了.最后要用orElse来接收这个对象.这样就就保证这个对象不会为null.
        Account account1 = Optional.ofNullable(account).filter(account2 -> account2.getMoney() > 20).orElse(new Account(20));
        Integer money = account1.getMoney();

        // 总结: get()方法,如果这个对象为null,回返回Exception,如果不为null,返回该对象
        //      orElse()方法,如果对象为null,返回orElse里面的参数,不为null,则返回该对象
        //      filter()/map()方法,对Optional里面的对象进行过滤或筛选,最后都是返回一个新的Optional对象.
        System.out.println(money);
    }
}
