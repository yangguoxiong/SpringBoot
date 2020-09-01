package com.movit.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.servlet.http.HttpServletRequest;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;


/**
 * <b>function:</b> 结果DTO
 */
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class Result<T> {

	public static final Integer SUCCESS = 0;//返回成功
	public static final Integer ERROR = 1; //一般错误，非表单错误，需要在msg设置error0,error1……
	public static final Integer FORMERROR = 4; //表单错误，需要在msg中设置错误的表单字段,比如name,password……
	public static final Integer FORBIDDEN_ERROR = 403;//登录错误
	public static final Integer NOT_FOUND = 404;//不存在
	public static final Integer SC_BAD_REQUEST = 400;//参数错误

	/**
	 * 以下为请求正常，但是特指某些特定业务错误
	 */
	public static final Integer SC_CREATED = 201;//存在
	public static final Integer SC_NOT_CREATED = 202;//不存在
	public static final Integer SC_FORMAT_ERROR = 202;//格式错误，比如说手机号格式错误，密码格式错误

	/**
	 * 非法用户文案
	 */
	public static final String ILLEGAL_USER_TEXT = "您还没登录，重新进入试试";
	public static final String ERROR0_KEY = "error0";
	public static final String SUCCESS_KEY = "success";


	/**
	 * 以下为业务上的错误
	 * 1001开头一般为账号上的错误
	 * 1002开头一般为密码上的错误
	 * 1003开头一般为验证码的错误
	 * 500x开头未权限错误
	 */

	/**
	 * 滑动验证不通过
	 **/
	public static final Integer CAPTCHA_NOT_PASS = 10058;
	/**
	 * 账号已经存在
	 **/
	public static final Integer AC_EXIST = 10010;
	/**
	 * 账号不存在
	 **/
	public static final Integer AC_NOT_EXIST = 10011;
	/**
	 * 账号为空
	 **/
	public static final Integer AC_IS_EMPTY = 10012;
	/**
	 * 账号格式错误
	 **/
	public static final Integer AC_FORMAT_ERROR = 10013;

	/**
	 * 密码为空
	 **/
	public static final Integer PW_IS_EMPTY = 10020;
	/**
	 * 密码格式错误
	 **/
	public static final Integer PW_FORMAT_ERROR = 10021;
	/**
	 * 密码错误
	 **/
	public static final Integer PW_ERROR = 10022;

	/**
	 * 验证码为空
	 **/
	public static final Integer VC_IS_EMPTY = 10030;
	/**
	 * 验证码错误
	 **/
	public static final Integer VC_ERROR = 10031;
	/**
	 * 验证码过期
	 **/
	public static final Integer VC_OUT_DATE = 10032;

	/**
	 * 邀请码错误
	 **/
	public static final Integer IVC_ERROR = 10040;

	/**
	 * 找不到申请店铺信息
	 **/
	public static final Integer COO_NOT_APPLY_INFO = 10050;
	/**
	 * 找不到被申请店铺信息
	 **/
	public static final Integer COO_NOT_SHOP_INFO = 10051;
	/**
	 * 合作关系不存在
	 **/
	public static final Integer COO_NOT_EXIST = 10052;
	/**
	 * 合作关系已经存在
	 **/
	public static final Integer COO_EXIST = 10053;
	/**
	 * 已经有合作申请
	 **/
	public static final Integer COO_EXIST_APPLY = 10054;
	/**
	 * 自己申请自己的合作关系
	 **/
	public static final Integer COO_IS_SELF = 10055;

	/**
	 * 必须要小视频
	 **/
	public static final Integer VIDEO_NEED = 10056;
	/**
	 * 店铺名称只允许修改一次名称
	 **/
	public static final Integer NAME_ONE_MODIFY = 10060;

	/**
	 * 连续出价限制
	 */
	public static final Integer CONTINUOUS_UP_PRICE_LIMIT = 10070;
	/**
	 * 最高出价提示
	 */
	public static final Integer TOP_UP_PRICE_TIP = 10071;
	/**
	 * 评价已经存在
	 **/
	public static final Integer ORDER_EVALUATE_EXIST = 10080;
	/**
	 * 直播已关闭
	 **/
	public static final Integer LIVE_CLOSE = 10091;
	/**
	 * 不能查看自己的直播
	 **/
	public static final Integer LIVE_NOT_SEE = 10092;
//    /**
//     * 已经开播,调用进入直播间接口
//     **/
//    public static final Integer LIVE_LIVEING = 10093;


	/**
	 * 逛市场直播间,轮播广告和二级导航都不开启
	 **/
	public static final Integer MARKET_LIVE_NOT_SHOW = 10094;

	/**
	 * 手机号已绑定过微信号
	 **/
	public static final Integer CELLPHONE_ALREADY_BIND = 10095;

	/**
	 * 更换手机号,旧手机较认已过期
	 **/
	public static final Integer CELLPHONE_CHECK_EXPIRED = 10096;

	/**
	 * 未抽到优惠券
	 **/
	public static final Integer LOTTERY_NOT_SUCCESS = 10097;

	/**
	 * 用户类型未满足
	 */
	public static final Integer USER_TYPE_DISSATISFY = 10098;

	/**
	 * 支付密码错误次数上限
	 **/
	public static final Integer MAX_PPW_ERROR = 10099;

	/**
	 * 抽奖条件未满足
	 */
	public static final Integer LOTTERY_CONDITION = 10100;

	/**
	 * 不能发动态权限
	 */
	public static final Integer UN_DYNAMIC_AUTHORIZATION = 50011;
	/**
	 * 不能动态关联商品权限
	 */
	public static final Integer UN_DYNAMIC_RELEVANCE_PRODUCT_AUTHORIZATION = 50012;


	public static final Integer NOT_EQUAL = 409;//不相等
	public static final Integer SC_INTERNAL_SERVER_ERROR = 500;//系统错误

	private Integer code;

	private Map<String, String> msg = new LinkedHashMap<>();

	private T data;

	private String requestId;

	/**
	 * 表单错误，一般后面调用.addMsg("field1","错误字段说明1").addMsg("field2","错误字段说明2")...addMsg("fieldN","错误字段说明N")添加字段错误说明
	 *
	 * @return Result
	 */
	public static Result formErrorResult() {
		Result result = new Result();
		result.setCode(FORMERROR);
		result.msg = new LinkedHashMap<>();
		result.setRequestId(UUID.randomUUID().toString());
		return result;
	}

	/**
	 * 一般的错误，可以调用.addMsg("eorror1","xyz").addMsg("eorror2","xyz")...addMsg("eorrorN","xyz")添加错误说明
	 *
	 * @param error0 错误说明
	 * @return Result
	 */
	public static Result<Object> forbiddenResult(String error0) {
		Result<Object> result = new Result<>();
		result.setCode(FORBIDDEN_ERROR);
		result.setData("");
		result.msg = new LinkedHashMap<>();
		result.msg.put(ERROR0_KEY, error0);
		result.setRequestId(UUID.randomUUID().toString());
		return result;
	}

	/**
	 * 登录错误
	 *
	 * @param error0 错误说明
	 * @return Result
	 */
	public static Result<Object> errorResult(String error0) {
		Result<Object> result = new Result<>();
		result.setCode(ERROR);
		result.setData("");
		result.msg = new LinkedHashMap<>();
		result.msg.put(ERROR0_KEY, error0);
		result.setRequestId(UUID.randomUUID().toString());
		return result;
	}

	public static Result<Object> errorResult(int code, String error0) {
		Result<Object> result = new Result<>();
		result.setCode(code);
		result.setData("");
		result.msg = new LinkedHashMap<>();
		result.msg.put(ERROR0_KEY, error0);
		result.setRequestId(UUID.randomUUID().toString());
		return result;
	}

	public static Result<Object> errorResult(int code, String error0, Object data) {
		Result<Object> result = new Result<>();
		result.setCode(code);
		result.setData(data);
		result.msg = new LinkedHashMap<>();
		result.msg.put(ERROR0_KEY, error0);
		result.setRequestId(UUID.randomUUID().toString());
		return result;
	}

	public static Result<Object> errorResult(String error0, Object data) {
		return errorResult(ERROR, error0, data);
	}

	public static Result<Object> errorResult(Object data) {
		return errorResult(ERROR, "", data);
	}

	/**
	 * 非法用户
	 *
	 * @return
	 */
	public static Result<Object> illegalUser() {
		Result<Object> result = new Result<>();
		result.setCode(ERROR);
		result.setData("");
		result.msg = new LinkedHashMap<>();
		result.msg.put(ERROR0_KEY, ILLEGAL_USER_TEXT);
		result.setRequestId(UUID.randomUUID().toString());
		return result;
	}

	/**
	 * 非法用户
	 *
	 * @return
	 */
	public static Result<Object> illegalUser(String msg) {
		Result<Object> result = new Result<>();
		result.setCode(ERROR);
		result.setData("");
		result.msg = new LinkedHashMap<>();
		result.msg.put(ERROR0_KEY, msg);
		result.setRequestId(UUID.randomUUID().toString());
		return result;
	}


	/**
	 * 成功返回
	 *
	 * @param msg  成功说明，如果没有则为""字符串，也可以直接调用successResult(Object data)方法
	 * @param data 业务字段，可以是任意值
	 * @return Result
	 */
	public static Result<Object> successResult(String msg, Object data) {
		Result<Object> result = new Result<>();
		result.setCode(SUCCESS);
		result.msg = new LinkedHashMap<>();
		result.msg.put(SUCCESS_KEY, msg);
		result.setData(data);
		result.setRequestId(UUID.randomUUID().toString());
		return result;
	}

	/**
	 * 成功返回
	 *
	 * @param msg 成功说明，如果没有则为""字符串，也可以直接调用successResult(Object data)方法
	 * @return Result
	 */
	public static Result<Object> successResult(String msg) {
		Result<Object> result = new Result<>();
		result.setCode(SUCCESS);
		result.msg = new LinkedHashMap<>();
		result.msg.put(SUCCESS_KEY, msg);
		result.setData(null);
		result.setRequestId(UUID.randomUUID().toString());
		return result;
	}

	public static Result<Object> successData(String data) {
		Result<Object> result = new Result<>();
		result.setCode(SUCCESS);
		result.msg = new LinkedHashMap<>();
		result.msg.put(SUCCESS_KEY, "");
		result.setData(data);
		result.setRequestId(UUID.randomUUID().toString());
		return result;
	}


	public Result data(T data) {
		this.data = data;
		return this;
	}

	public Result addMsg(String key, String value) {
		this.msg.put(key, value);
		return this;
	}

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public Map<String, String> getMsg() {
		return msg;
	}

	public void setMsg(Map<String, String> msg) {
		this.msg = msg;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	public String getRequestId() {
		return requestId;
	}

	public void setRequestId(String requestId) {
		this.requestId = requestId;
	}

}
