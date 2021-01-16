1. 引入jar包
```xml
<!--CGLIB动态代理-->
        <dependency>
            <groupId>cglib</groupId>
            <artifactId>cglib</artifactId>
            <version>2.2.2</version>
        </dependency>
```
2. 创建Enhance对象获得代理类
```java
    public <T> T getProxyObject(Class<T> clazz) {
            Enhancer enhancer = new Enhancer();
            // 设置回调函数
            enhancer.setCallback(this);
            // 设置目标类为父类
            enhancer.setSuperclass(clazz);
            // 创建继承了目标类的子类代理对象
            T proxyObject = (T) enhancer.create();
            return proxyObject;
        }
```
3. 实现`MethodInterceptor`重写`intercept`方法
```java
    @Override
    public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
        System.out.println("CGLIB代理方法中....");
        Object invoke = methodProxy.invokeSuper(o, objects);
        return invoke;
    }
```
4. 调用
```java
    UserCGLIBProxy proxy = UserCGLIBProxy.getInstance();
    // 传递具体实现类字节码对象,返回具体实现类
    UserServiceCGLIB proxyObject = proxy.getProxyObject(UserServiceCGLIB.class);
    // 实际执行的是动态生成的继承了具体实现类的子类的editName方法
    String editName = proxyObject.editName("新名字");
```