package com.kucc.netflix.controller;

import com.kucc.netflix.common.CommonResponse;
import com.kucc.netflix.domain.dto.UserDto;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

  @GetMapping("/user/me")
  public CommonResponse<UserDto.Response> getMyInfo(UserDto.Login user){
    return CommonResponse.ok();
  }

  @GetMapping("/user/{id}")
  public CommonResponse<UserDto.Response> getUserInfo(@PathVariable("id") Long id){
    return CommonResponse.ok();
  }
}
