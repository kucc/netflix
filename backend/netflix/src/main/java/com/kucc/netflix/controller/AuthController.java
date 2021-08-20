package com.kucc.netflix.controller;

import com.kucc.netflix.domain.dto.UserDto;
import com.kucc.netflix.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

  private final AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @PostMapping("/login")
  public ResponseEntity<String> login(@RequestBody UserDto.Login req){
    String token = authService.Login(req);
    return ResponseEntity.ok().body(token);
  }

}
