package com.movit;

import org.joda.time.DateTime;
import org.joda.time.Minutes;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application
{
    public static void main( String[] args )
    {
        // SpringApplication.run(Application.class);
        DateTime plusMinutes = new DateTime(2020, 8, 31, 16, 10, 00);
        DateTime now = DateTime.now();
        Minutes minutes = Minutes.minutesBetween(plusMinutes, now);
        System.out.println(minutes.getMinutes());
    }
}
