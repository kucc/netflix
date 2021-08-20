package com.kucc.netflix.controller;

import com.kucc.netflix.common.CommonResponse;
import com.kucc.netflix.domain.dto.UserDto;
import com.kucc.netflix.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/profile")
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/{id}")
  public CommonResponse<UserDto.Response> getUserProfile(@PathVariable("id") Long id){
    return CommonResponse.ok(
        "success", userService.getUserProfile(id)
    );
  }

  @GetMapping("/tag")
  public CommonResponse<List<UserDto.Response>> getUserProfileList(@RequestParam("tag") String tag){
    return CommonResponse.ok(
        "success", userService.getUserProfileList(tag)
    );
  }

  @GetMapping("/me")
  public CommonResponse<UserDto.Response> getMyProfile(Long id){
    return CommonResponse.ok("success", userService.getUserProfile(id));
  }



  @PostMapping
  public CommonResponse<UserDto.Response> writeUserProfile(@RequestBody UserDto.Request req) {
    return CommonResponse.ok(
        "success", userService.writeUserProfile(req)
    );
  }

  @PutMapping("/{id}")
  public CommonResponse<UserDto.Response> editUserProfile(@PathVariable("id") Long id, @RequestBody UserDto.Request req){
    return CommonResponse.ok("success", userService.editUserProfile(id, req));
  }

  @PutMapping("/toggle")
  public CommonResponse<UserDto.Response> toggleProfile(Long id){
    return CommonResponse.ok(
        "success", userService.toggleProfile(id)
    );
  }
}
