package com.movit.utils;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.fluent.Form;
import org.apache.http.client.fluent.Request;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import java.io.IOException;
import java.math.BigDecimal;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

/**
 * Fluent API 也就是Apache的HttpClient的请求方法
 *
 * @Author: yangguoxiong
 * @Date: 2019/12/30
 */
public class ApacheHttpClientTest {

    public static void main(String[] args) throws Exception {
        //测试普通方法
        testNormalHttpClient();
        //测试POST请求
        testPostHttpClient();
    }

    private static void testNormalHttpClient() throws IOException {
        //封装表单数据
        Form form = Form.form().add("orderId", "orderId").add("paymentAmount", BigDecimal.ZERO.toString())
                .add("paymentChannel", "555").add("sign", "sign").add("paymentType", "paymentType")
                .add("clientVersion", Double.toString(1L));
        //发送Http请求
        HttpResponse response = Request.Post("http://10.0.100.174:33343/wallets/wallet_pay").bodyForm(form.build(), Charset.forName("UTF-8")).execute().returnResponse();

        System.out.println("请求返回状态码: " + response.getStatusLine().getStatusCode());
    }

    public static void testPostHttpClient () throws Exception {
        List<NameValuePair> formParams = new ArrayList<NameValuePair>();
        formParams.add(new BasicNameValuePair("account", ""));
        formParams.add(new BasicNameValuePair("password", ""));
        HttpEntity reqEntity = new UrlEncodedFormEntity(formParams, "utf-8");

        RequestConfig requestConfig = RequestConfig.custom()
                .setConnectTimeout(5000)//一、连接超时：connectionTimeout-->指的是连接一个url的连接等待时间
                .setSocketTimeout(5000)// 二、读取数据超时：SocketTimeout-->指的是连接上一个url，获取response的返回等待时间
                .setConnectionRequestTimeout(5000)
                .build();

        HttpClient client = new DefaultHttpClient();
        HttpPost post = new HttpPost("http://cnivi.com.cn/login");
        post.setEntity(reqEntity);
        post.setConfig(requestConfig);
        HttpResponse response = client.execute(post);

        if (response.getStatusLine().getStatusCode() == 200) {
            HttpEntity resEntity = response.getEntity();
            String message = EntityUtils.toString(resEntity, "utf-8");
            System.out.println(message);
        } else {
            System.out.println("请求失败");
        }
    }
}
