package com.movit.utils;

import sun.misc.BASE64Encoder;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * 生成摘要工具类(中通)
 */
public class testDataDigest {
    public static final String UTF8 = "UTF-8";

    /**
     * @param args
     * @throws UnsupportedEncodingException
     * @throws NoSuchAlgorithmException
     */
    public static void main(String[] args) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        String data = "<OrderNormal><created_time>2020-01-15 17:28:04</created_time><logistics_provider>B</logistics_provider><ecommerce_no>CICPSSYSTEM</ecommerce_no><ecommerce_user_id>2</ecommerce_user_id><sender_type>1</sender_type><sender_no></sender_no><inner_channel>0</inner_channel><logistics_order_no>816047776752203569</logistics_order_no><batch_no></batch_no><waybill_no></waybill_no><one_bill_flag></one_bill_flag><submail_no></submail_no><one_bill_fee_type></one_bill_fee_type><contents_attribute>3</contents_attribute><base_product_no>21210</base_product_no><biz_product_no>112104302300991</biz_product_no><product_type>113124300000691</product_type><weight></weight><volume></volume><length></length><width></width><height></height><postage_total></postage_total><pickup_notes></pickup_notes><insurance_flag>1</insurance_flag><insurance_amount></insurance_amount><deliver_type></deliver_type><deliver_pre_date> </deliver_pre_date><pickup_type> </pickup_type><pickup_pre_begin_time></pickup_pre_begin_time><pickup_pre_end_time></pickup_pre_end_time><payment_mode>2</payment_mode><cod_flag>1</cod_flag><cod_amount>61.00</cod_amount><receipt_flag></receipt_flag><receipt_waybill_no></receipt_waybill_no><electronic_preferential_no></electronic_preferential_no><electronic_preferential_amount></electronic_preferential_amount><valuable_flag>0</valuable_flag><sender_safety_code>0</sender_safety_code><receiver_safety_code></receiver_safety_code><note></note><project_id></project_id><sender><name>陆安波</name><post_code>510000</post_code><phone>020-86210730</phone><mobile>020-86210730</mobile><prov>广东</prov><city>广州</city><county>白云区</county><address>广州市白云区均禾街道夏花二路66号401</address></sender><pickup><name>陆安波</name><post_code>510000</post_code><phone>020-86210730</phone><mobile>020-86210730</mobile><prov>广东</prov><city>广州</city><county>白云区</county><address>广州市白云区均禾街道夏花二路66号401</address></pickup><receiver><name>王丽婷</name><post_code></post_code><phone>18690972424</phone><mobile>18690972424</mobile><prov>新疆维吾尔自治区</prov><city>新疆维吾尔自治区</city><county>沙依巴克区</county><address>新疆维吾尔自治区乌鲁木齐市沙依巴克区西山街道沙区西环中路151号中山花苑小区</address></receiver><cargos><Cargo><cargo_name>医用棉签(B型)</cargo_name><cargo_category></cargo_category><cargo_quantity></cargo_quantity><cargo_value></cargo_value><cargo_weight></cargo_weight></Cargo><Cargo><cargo_name>过氧苯甲酰凝胶</cargo_name><cargo_category></cargo_category><cargo_quantity></cargo_quantity><cargo_value></cargo_value><cargo_weight></cargo_weight></Cargo></cargos></OrderNormal>";
        String parentId = "key123xydJDPT";
        //消息签名

        String data_digest = makeSignEMS(data, parentId);
        System.out.println("data_digest = " + data_digest);

    }

    public static String makeSignEMS(String data, String parentId)
            throws NoSuchAlgorithmException, UnsupportedEncodingException {
        MessageDigest md = MessageDigest.getInstance("MD5");
        BASE64Encoder base64en = new BASE64Encoder();
        String Ret = base64en.encode(MessageDigest.getInstance("MD5").digest((data + parentId).getBytes("UTF-8")));
        return Ret;
    }
}