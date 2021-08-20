package com.kucc.netflix.common;

import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

  public CommonResponse<Void> handleUserNotFondException(CommonException ex){
    return CommonResponse.fail(ex.getMessage());
  }
}
