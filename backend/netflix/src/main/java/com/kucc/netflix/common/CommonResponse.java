package com.kucc.netflix.common;

import lombok.Getter;

@Getter
public class CommonResponse<T> {

  private final String message;
  private final T data;

  private CommonResponse(String message, T data) {
    this.message = message;
    this.data = data;
  }

  public static <T> CommonResponse<T> ok() {
    return new CommonResponse<>(null, null);
  }

  public static <T> CommonResponse<T> ok(String message, T data) {
    return new CommonResponse<>(message, data);
  }

  public static <T> CommonResponse<T> ok(T data) {
    return new CommonResponse<>(null, data);
  }

  public static <T> CommonResponse<T> fail(String message) {
    return new CommonResponse<T>(message, null);
  }
}