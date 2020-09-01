package com.movit.utils;

import cn.hutool.core.util.IdUtil;

import java.util.*;

/**
 * 随机字符串或数字的工具类
 * Created by hlongy on 2015/10/8.
 */
public class RandomUtil {

    static Random r = new Random();

    /**
     * 将每个时段的序列存储到内存中，以分为单位
     */
    private static Map<Long, Long> numericSequenceMap = new HashMap<>();

    public static final String PN_CODE = "PN";



    private static long getNumericSequenceMap(long date) {

        long result = 0L;
        if (numericSequenceMap.isEmpty()) {
            result = date;
            numericSequenceMap.put(date, Long.valueOf(1));
        } else {
            Iterator it = numericSequenceMap.entrySet().iterator();
            while (it.hasNext()) {
                Map.Entry e = (Map.Entry) it.next();
                Long key = (Long) e.getKey();

                //如果大于内存中的时间 ，则清空内存的时间 ，把大的时间 存入
                if (date > key) {
                    numericSequenceMap.clear();
                    numericSequenceMap.put(date, Long.valueOf(1));
                    result = date;
                } else {
                    if (key > result) {
                        result = key;
                    }
                }
            }
        }
        return result;
    }

    /**
     * 根据一个范围，生成一个随机的整数
     *
     * @param min 最小值（包括）
     * @param max 最大值（包括）
     * @return 随机数
     */
    public static int random(int min, int max) {
        return r.nextInt(max - min + 1) + min;
    }


    private static final char[] _UU64 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzdZ".toCharArray();
    private static final char[] _UU32 = "0123456789abcdefghijklmnopqrstuv".toCharArray();

    /**
     * @return 64进制表示的紧凑格式的 UUID
     */
    public static String UU64() {
        return UU64(UUID.randomUUID());
    }

    /**
     * 返回一个 UUID ，并用 64 进制转换成紧凑形式的字符串，内容为 [\\0-9a-zA-Z]
     * <p/>
     * 比如一个类似下面的 UUID:
     * <p/>
     * <pre>
     * a6c5c51c-689c-4525-9bcd-c14c1e107c80
     * 一共 128 位，分做L64 和 R64，分为为两个 64位数（两个 long）
     *    > L = uu.getLeastSignificantBits();
     *    > R = uu.getMostSignificantBits();
     * 而一个 64 进制数，是 6 位，因此我们取值的顺序是
     * 1. 从L64位取10次，每次取6位
     * 2. 从L64位取最后的4位 ＋ R64位头2位拼上
     * 3. 从R64位取10次，每次取6位
     * 4. 剩下的两位最后取
     * 这样，就能用一个 22 长度的字符串表示一个 32 长度的UUID，压缩了 1/3
     * </pre>
     *
     * @param uu UUID 对象
     * @return 64进制表示的紧凑格式的 UUID
     */
    public static String UU64(UUID uu) {
        int index = 0;
        char[] cs = new char[22];
        long L = uu.getMostSignificantBits();
        long R = uu.getLeastSignificantBits();
        long mask = 63;
        // 从L64位取10次，每次取6位
        for (int off = 58; off >= 4; off -= 6) {
            long hex = (L & (mask << off)) >>> off;
            cs[index++] = _UU64[(int) hex];
        }
        // 从L64位取最后的4位 ＋ R64位头2位拼上
        int l = (int) (((L & 0xF) << 2) | ((R & (3 << 62)) >>> 62));
        cs[index++] = _UU64[l];
        // 从R64位取10次，每次取6位
        for (int off = 56; off >= 2; off -= 6) {
            long hex = (R & (mask << off)) >>> off;
            cs[index++] = _UU64[(int) hex];
        }
        // 剩下的两位最后取
        cs[index++] = _UU64[(int) (R & 3)];
        // 返回字符串
        return new String(cs);
    }

    /**
     * 从一个 UU64 恢复回一个 UUID 对象
     *
     * @param uu64 64进制表示的 UUID, 内容为 [\\0-9a-zA-Z]
     * @return UUID 对象
     */
    public static UUID fromUU64(String uu64) {
        String uu16 = UU16FromUU64(uu64);
        return UUID.fromString(UU(uu16));
    }

    public static String UU32(UUID uu) {
        StringBuilder sb = new StringBuilder();
        long m = uu.getMostSignificantBits();
        long l = uu.getLeastSignificantBits();
        for (int i = 0; i < 13; i++) {
            sb.append(_UU32[(int) (m >> ((13 - i - 1) * 5)) & 31]);
        }
        for (int i = 0; i < 13; i++) {
            sb.append(_UU32[(int) (l >> ((13 - i - 1)) * 5) & 31]);
        }
        return sb.toString();
    }

    public static String UU32() {
        return UU32(UUID.randomUUID());
    }

    public static UUID fromUU32(String u32) {
        return new UUID(parseUnsignedLong(u32.substring(0, 13), 32), parseUnsignedLong(u32.substring(13), 32));
    }

    public static long parseUnsignedLong(String s, int radix) {
        int len = s.length();
        long first = Long.parseLong(s.substring(0, len - 1), radix);
        int second = Character.digit(s.charAt(len - 1), radix);
        return first * radix + second;
    }

    /**
     * 将紧凑格式的 UU16 字符串变成标准 UUID 格式的字符串
     *
     * @return 标准 UUID 字符串
     */
    public static String UU(String uu16) {
        return uu16.substring(0, 8)
                + "-" + uu16.substring(8, 12)
                + "-" + uu16.substring(12, 16)
                + "-" + uu16.substring(16, 20)
                + uu16.substring(20);
    }

    private static final char[] _UU16 = "0123456789abcdef".toCharArray();

    /**
     * 将一个 UU64 表示的紧凑字符串，变成 UU16 表示的字符串
     * <p/>
     * <pre>
     * 每次取2个字符，恢复成3个byte，重复10次，
     * 最后一次，是用最后2个字符，恢复回2个byte
     * </prev>
     *
     * @param uu64 uu64 64进制表示的 UUID, 内容为 [\\0-9a-zA-Z]
     * @return 16进制表示的紧凑格式的 UUID
     */
    public static String UU16FromUU64(String uu64) {
        byte[] bytes = new byte[32];
        char[] cs = uu64.toCharArray();
        int index = 0;
        // 每次取2个字符，恢复成3个byte，重复10次，
        for (int i = 0; i < 10; i++) {
            int off = i * 2;
            char cl = cs[off];
            char cr = cs[off + 1];
            int l = Arrays.binarySearch(_UU64, cl);
            int r = Arrays.binarySearch(_UU64, cr);
            int n = (l << 6) | r;
            bytes[index++] = (byte) ((n & 0xF00) >>> 8);
            bytes[index++] = (byte) ((n & 0xF0) >>> 4);
            bytes[index++] = (byte) (n & 0xF);
        }
        // 最后一次，是用最后2个字符，恢复回2个byte
        char cl = cs[20];
        char cr = cs[21];
        int l = Arrays.binarySearch(_UU64, cl);
        int r = Arrays.binarySearch(_UU64, cr);
        int n = (l << 2) | r;
        bytes[index++] = (byte) ((n & 0xF0) >>> 4);
        bytes[index++] = (byte) (n & 0xF);

        // 返回 UUID 对象
        char[] names = new char[32];
        for (int i = 0; i < bytes.length; i++) {
            names[i] = _UU16[bytes[i]];
        }
        return new String(names);
    }

    public static String UUID22() {
        UUID uuid = UUID.randomUUID();
        long mostSigBits = uuid.getMostSignificantBits();
        long leastSigBits = uuid.getLeastSignificantBits();

        StringBuffer uuid22 = new StringBuffer();

        uuid22.append(digits(mostSigBits >> 16, 4).substring(2));
        uuid22.append(digits(mostSigBits, 4));
        uuid22.append(digits(leastSigBits >> 48, 4));
        uuid22.append(digits(leastSigBits, 12));
        return uuid22.toString();
    }

    private static String digits(long val, int digits) {
        long hi = 1L << (digits * 4);
        return Long.toHexString(hi | (val & (hi - 1))).substring(1);
    }


    /**
     * 随机生成序列化id,固定18位
     */
    public static String randomSerializable() {
        boolean flag = cn.hutool.core.util.RandomUtil.randomBoolean();

        String str = cn.hutool.core.util.RandomUtil.randomNumbers(18);

        String result = flag == true ? str : "-" + str;

        return result + "L";
    }

    public static void main(String[] args) {
        System.out.println(IdUtil.objectId());
        System.out.println(IdUtil.randomUUID());
        System.out.println(IdUtil.simpleUUID());
        System.out.println(IdUtil.fastUUID());
        System.out.println(IdUtil.fastSimpleUUID());
        System.out.println(randomSerializable());

    }

}
