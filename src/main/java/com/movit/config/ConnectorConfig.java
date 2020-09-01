package com.movit.config;
import org.apache.catalina.Context;
import org.apache.catalina.connector.Connector;
import org.apache.coyote.http11.Http11NioProtocol;
import org.apache.tomcat.util.descriptor.web.SecurityCollection;
import org.apache.tomcat.util.descriptor.web.SecurityConstraint;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.CharacterEncodingFilter;

@Configuration
//这个启动类是用来将http://localhost:8085的请求重定向到:https://localhost:8086
public class ConnectorConfig {

	@Value("${server.port.http}")
	private int serverPortHttp;

	@Value("${server.port}")
	private int serverPortHttps;

	public ConnectorConfig() {
		System.out.println("spring容器加载了这个配置类,以及这个配置类的@Bean注解的类.");
	}

	//http重定向到https
	@Bean
	public ServletWebServerFactory servletWebServerFactory() {
		TomcatServletWebServerFactory factory = new TomcatServletWebServerFactory() {
			@Override
			protected void postProcessContext(Context context) {
				SecurityConstraint securityConstraint = new SecurityConstraint();
				securityConstraint.setUserConstraint("CONFIDENTIAL");
				SecurityCollection securityCollection = new SecurityCollection();
				// 表示拦截任何http的请求,例如:
				// http://localhost:8085将会被重定向到https://localhost:8086;
				// http://localhost:8085/wtchk将会被重定向到https://localhost:8086/wtchk;
				securityCollection.addPattern("/*");
				securityConstraint.addCollection(securityCollection);
				context.addConstraint(securityConstraint);
			}
		};
		factory.addAdditionalTomcatConnectors(redirectConnector());
		return factory;
	}

	private Connector redirectConnector() {
		Connector connector = new Connector(Http11NioProtocol.class.getName());
		connector.setScheme("http");
		connector.setPort(serverPortHttp);
		connector.setSecure(false);
		connector.setRedirectPort(serverPortHttps);
		return connector;
	}

	//解决全局乱码问题
	@Bean
	public FilterRegistrationBean filterRegistrationBean() {
		FilterRegistrationBean registrationBean = new FilterRegistrationBean();
		CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
		characterEncodingFilter.setForceEncoding(true);
		characterEncodingFilter.setEncoding("UTF-8");
		registrationBean.setFilter(characterEncodingFilter);
		return registrationBean;
	}
}