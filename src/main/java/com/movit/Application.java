package com.movit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.movit.config", "com.movit.event", "com.movit.controller"})
public class Application
{
    public static void main( String[] args )
    {
        SpringApplication.run(Application.class);
    }
}
