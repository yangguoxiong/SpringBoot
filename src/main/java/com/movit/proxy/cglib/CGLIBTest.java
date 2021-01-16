package com.movit.proxy.cglib;

/**
 * @author: yangguoxiong
 * @date: 2021/1/16 12:49
 * @description: CGLIB动态代理测试
 */
public class CGLIBTest {

    public static void main(String[] args) {
        UserCGLIBProxy proxy = UserCGLIBProxy.getInstance();
        // 传递具体实现类字节码对象,返回具体实现类
        UserServiceCGLIB proxyObject = proxy.getProxyObject(UserServiceCGLIB.class);
        // 实际执行的是动态生成的继承了具体实现类的子类的editName方法
        String editName = proxyObject.editName("新名字");
        System.out.println(editName);
    }
}
