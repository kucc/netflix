package com.kucc.netflix.domain.dto;

import lombok.*;

import java.util.List;

public class UserDto {

  @Getter @Setter
  public static class Login{
    private String email;
    private String password;

  }

  @Builder @Setter @Getter
  @NoArgsConstructor @AllArgsConstructor
  public static class Response{
    private Long id;
    private String email;
    private String password;

    private String name;

    private String job;

    private String major;

    private String hobby;

    private List<String> interest;

    private List<String> stack;

    private String etc;

    private String comment;

    private String phone;

    private String github;

    private String blog;

    private String joinDate;

  }

  @Getter @Setter
  public static class Request {

    private String name;

    private String job;

    private String major;

    private String hobby;

    private List<String> interest;

    private List<String> stack;

    private String etc;

    private String comment;

    private String phone;

    private String github;

    private String blog;

    private String joinDate;

  }
}
