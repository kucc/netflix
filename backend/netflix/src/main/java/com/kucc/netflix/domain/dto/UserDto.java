package com.kucc.netflix.domain.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class UserDto {

  @Getter
  public static class Login{

  }

  @Builder
  @NoArgsConstructor
  public static class Response{

  }

  @Getter
  public static class Request {

    private String name;

    private String job;

    private String major;

    private String hobby;

    private String interest;

    private String stack;

    private String etc;

    private String comment;

    private String phone;

    private String github;

    private String blog;

    private String joinDate;

  }
}
