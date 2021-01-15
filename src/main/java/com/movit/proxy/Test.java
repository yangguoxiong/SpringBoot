package com.movit.proxy;

/**
 * @author: yangguoxiong
 * @date: 2021/1/15 14:20
 * @description: 动态代理测试
 */
public class Test {

    public static void main(String[] args) {
        // 调用动态代理方法, 返回用户接口类
        UserService userService = UserProxyFactory.getProxy(new AdminUserServiceImpl());
        // 执行, 动态生成代理类
        String name = userService.editName("mark");
    }
}
