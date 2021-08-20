package com.kucc.netflix.controller;

import com.kucc.netflix.common.CommonResponse;
import com.kucc.netflix.domain.dto.UserDto;
import com.kucc.netflix.domain.entity.User;
import com.kucc.netflix.domain.mapper.UserMapper;
import com.kucc.netflix.service.AuthService;
import com.kucc.netflix.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

  private final AuthService authService;
  private final UserService userService;

  public AuthController(AuthService authService, UserService userService) {

    this.authService = authService;
    this.userService = userService;
  }

  @PostMapping("/login")
  public CommonResponse<String> login(@RequestBody UserDto.Login req) {
    String token = authService.Login(req);
    return CommonResponse.ok(null, token);
  }

  @PostMapping("/signup")
  public CommonResponse<UserDto.Response> signUp(@RequestBody UserDto.Login req) {

    return CommonResponse.ok(authService.signUp(req));

  }

}
