package com.movit.utils;

import cn.hutool.core.util.ObjectUtil;
import com.google.common.collect.Lists;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;


public class ListTest {

    public static void main(String[] args) {
	    // test03();
        // test04();
        test05();
    }

    private static void test05() {
        List<Topic> list = new ArrayList<>();
        Topic topic1 = new Topic(0, "mark");
        Topic topic2 = new Topic(1, "mark2");
        Topic topic3 = new Topic(0, "mark3");
        Topic topic4 = new Topic(0, "mark4");
        Topic topic5 = new Topic(2, "mark5");
        Topic topic6 = new Topic(1, "mark6");
        Topic topic7 = new Topic(0, "mark7");
        Topic topic8 = new Topic(6, "mark8");
        Topic topic9 = new Topic(4, "mark9");
        list.add(topic1);
        list.add(topic2);
        list.add(topic3);
        list.add(topic4);
        list.add(topic5);
        list.add(topic6);
        list.add(topic7);
        list.add(topic8);
        list.add(topic9);
        List<Topic> topics = Lists.newArrayList();
        // 升序排序
        list.sort(Comparator.comparing(Topic::getId));
        Iterator<Topic> iterator = list.iterator();
        while (iterator.hasNext()) {
            Topic topic = iterator.next();
            if (topics.size() == 4) {
                break;
            }
            if (topic.getId() == 0) {
                topics.add(topic);
                iterator.remove();
            }
        }
        Map<Integer, Topic> map = list.stream().filter(ObjectUtil::isNotNull).collect(Collectors.toMap(Topic::getId, Function.identity(), (k1, k2) -> k1));

        // 将热门话题中对应位置排序取代
        for (int i = 0; i < topics.size(); i++) {
            Topic sortTopic = map.get(i + 1);
            if (ObjectUtil.isNull(sortTopic)) {
                continue;
            }
            topics.set(i, sortTopic);
        }
        topics = topics.stream().limit(4).collect(Collectors.toList());
        System.out.println(topics);
    }

    private static void test04() {
        List<String> list = Arrays.asList("1", "2", "3", "4", "5", "6");
        List<String> newList = Lists.newArrayList();
        for (int i = ((3 - 1) * 2); i < list.size(); i++) {
            newList.add(list.get(i));
            if (newList.size() == 2) {
                break;
            }
        }
        newList.stream().forEach(System.out::println);
    }

    private static void test03() {
		List<String> list = Arrays.asList("1", "2", "999", "3");
		int indexOf = list.indexOf("2");
		// 将指定索引的元素排在最前面
		Collections.swap(list, indexOf, 0);
		list.stream().forEach(System.out::println);
	}

	public static void test01() {
        List<String> list = new ArrayList<>();
        list.add("1");
        list.add("2");
        int index = 0;
        do {
            System.out.println(list.get(index));
            index++;
        } while (index < list.size());
    }

    public static void test02() {
        PointTypeEnum[] values = PointTypeEnum.values();
        List<PointTypeEnum> arrayList = new ArrayList<>(Arrays.asList(values));
        boolean validEnum = arrayList.contains(2);
        System.out.println(validEnum);
    }

    public enum PointTypeEnum {

        全部积分操作记录(0),
        获得积分操作记录(1),
        支出积分操作记录(2);

        private int type;

        public int getType() {
            return this.type;
        }

        private PointTypeEnum(int type) {
            this.type = type;
        }
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    static class Topic {
        private Integer id;
        private String name;
    }
}
