1. UserProxyFactory不是一个代理类

2. 代理类是代码运行中动态生成的

3. 核心方法是Proxy.newProxyInstance();

4. 通过匿名内部类或者lambda表达式,创建InvocationHandle实现类, 在重写invoke方法中, 执行具体方法的同时执行增强方法.

5. JDK动态代理一定要定义一个接口才能使用, 所以才衍生了CGLIB, 它是用继承的方式来实现动态代理

6. SpringAOP就是使用了JDK动态代理/CGLIB代理模式方式做到切面.

7. 用处/场景: 如果现有的某个方法,已经很复杂,但是又要增加新的业务逻辑,就可以通过代理模式,增强方法.

8. 参考: https://blog.csdn.net/javazejian/article/details/56267036

9. RPC远程调用(像调用本地服务一样调用远程服务)也是使用道理代理模式: https://www.cnblogs.com/LBSer/p/4853234.html
