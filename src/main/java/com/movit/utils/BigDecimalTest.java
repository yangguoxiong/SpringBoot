package com.movit.utils;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.TreeSet;
import java.util.stream.Collectors;

/**
 * 测试BigDecimal
 *
 * @author Mark
 */
public class BigDecimalTest {

    public static void main(String[] args) {
        // a.compareTo(b) == 0,表示两个值相等
        // a.compareTo(b) == 1,表示a大于b
        // a.compareTo(b) == -1,表示a小于b
        BigDecimal a = new BigDecimal(12.3);
        BigDecimal b = new BigDecimal(12.3);
        System.out.println(a.compareTo(b) > 0);

        System.out.println("=================");

        Double d = 1.5 * 22334;
        String format = new DecimalFormat("0").format(d);
        System.out.println(Integer.parseInt(format));

	    test1();
    }

    public static void test1() {
	    List<Person> personList = new ArrayList<>();
	    personList.add(new Person("one", 10));
	    personList.add(new Person("two", 20));
	    personList.add(new Person("four", 47));
	    personList.add(new Person("three", 30));
	    //这两的name值重复
	    personList.add(new Person("four", 45));
	    personList.add(new Person("four", 40));
	    personList.add(new Person("four", 38));
        List<Person> distinctList = personList.stream()
                .collect(Collectors.collectingAndThen(Collectors.toCollection(() -> new TreeSet<>(Comparator.comparing(Person::getName))), ArrayList::new));
	    for (Person person : distinctList) {
		    System.out.println(person);
	    }
    }

    static class Person {
        private String name;
        private int age;

	    public String getName() {
		    return this.name;
	    }

	    public void setName(String name) {
		    this.name = name;
	    }

	    public Person(String name, int age) {
		    this.name = name;
		    this.age = age;
	    }

	    @Override
	    public String toString() {
		    return "Person{" +
				    "name='" + name + '\'' +
				    ", age=" + age +
				    '}';
	    }
    }
}
