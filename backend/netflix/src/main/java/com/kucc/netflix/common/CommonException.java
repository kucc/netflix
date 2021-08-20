package com.kucc.netflix.common;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class CommonException extends RuntimeException{

  public CommonException(String message){
    super(message);
  }
}
