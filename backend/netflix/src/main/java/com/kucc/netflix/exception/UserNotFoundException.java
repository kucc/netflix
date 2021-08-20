package com.kucc.netflix.exception;

import com.kucc.netflix.common.CommonException;

public class UserNotFoundException extends CommonException {
  public UserNotFoundException(){
    super("ID에 해당하는 USER가 존재하지 않습니다.");
  }
}
