package com.movit.utils;

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.ExcelWriter;
import com.alibaba.excel.annotation.ExcelProperty;
import com.alibaba.excel.annotation.write.style.ColumnWidth;
import com.alibaba.excel.write.metadata.WriteSheet;
import lombok.Data;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

public class EasyExcelUtil {

    @Data
    @ColumnWidth(20) // 定义列宽
    public static class TestVO{
        @ExcelProperty( value = "姓名",index = 0)
        private String name;
        @ExcelProperty( value = "年龄",index = 1)
        private int age;
        @ExcelProperty( value = "学校",index = 2)
        private String school;
    }
    /**
     * 使用 模型 来写入Excel
     *
     * @param outputStream Excel的输出流
     * @param dataList         要写入的以 模型 为单位的数据
     * @param clazz        模型的类
     */
    public static void writeExcelWithModel(OutputStream outputStream, String sheetName, List<? extends Object> dataList, Class<? extends Object> clazz) {
        //这里指定需要表头，因为model通常包含表头信息
        ExcelWriter writer = EasyExcel.write(outputStream, clazz).build();
        //创建writeSheet，设置基本信息
        WriteSheet writeSheet = new WriteSheet();
        writeSheet.setSheetName(sheetName);
        writer.write(dataList, writeSheet);
        writer.finish();
    }
    public static void main(String[] args) throws Exception {
        OutputStream outputStream = null;
        outputStream = new FileOutputStream(new File("D:\\666.xls"));
        List<TestVO> dataList = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            TestVO testVO = new TestVO();
            testVO.setAge(i + 20);
            testVO.setName("vo" + i);
            testVO.setSchool("school" + i);
            dataList.add(testVO);
        }
        String sheetName = "导出文件";
        writeExcelWithModel(outputStream, sheetName, dataList, TestVO.class);
    }
}
