package com.movit;

import com.movit.service.impl.MailServiceImpl;
import org.joda.time.LocalDateTime;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MailServiceImplTest {

	@Autowired
	private MailServiceImpl mailService;

	@Test
	public void testSimpleMail() throws Exception {
		mailService.sendSimpleMail("260538408@qq.com", "test simple mail", "hello this is a simple mail");
	}

	@Test
	public void testHtmlMail() throws Exception {
		String content="<html>\n" +
				"<body>\n" +
				"    <h3>hello world ! 这是一封html邮件!</h3>\n" +
				"</body>\n" +
				"</html>";
		mailService.sendHtmlMail("260538408@qq.com","test simple mail",content);
	}

	@Test
	public void sendAttachmentsMail() {
		String filePath="D:\\Mydata\\Notes\\Hybris document.txt";
		mailService.sendAttachmentsMail("260538408@qq.com", "主题：带附件的邮件", "有附件，请查收！", filePath);
	}


	@Test
	public void sendInlineResourceMail() {
		String rscId = "neo006";
		String content="<html><body>这是有图片的邮件：<img src=\'cid:" + rscId + "\' ></body></html>";
		String imgPath = "D:\\photo\\gradle_setting.png";

		mailService.sendInlineResourceMail("260538408@qq.com", "主题：这是有图片的邮件", content, imgPath, rscId);
	}


	/*@Test
	public void sendTemplateMail() {
		//创建邮件正文
		Context context = new Context();
		context.setVariable("id", "006");
		String emailContent = templateEngine.process("emailTemplate", context);

		mailService.sendHtmlMail("260538408@qq.com","主题：这是模板邮件",emailContent);
	}*/

	public static void main(String[] args) {
		System.out.println(LocalDateTime.now().minusYears(1).toDate());
	}

}
