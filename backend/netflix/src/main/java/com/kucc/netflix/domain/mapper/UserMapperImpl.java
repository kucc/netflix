package com.kucc.netflix.domain.mapper;

import com.kucc.netflix.domain.dto.UserDto;
import com.kucc.netflix.domain.entity.User;

import java.util.ArrayList;
import java.util.List;

public class UserMapperImpl implements UserMapper{
  @Override
  public User toEntity(UserDto.Request req) {

    StringBuilder interests = new StringBuilder();
    for(String it:req.getInterest()){
      interests.append(it);
    }

    StringBuilder stacks = new StringBuilder();
    for(String it: req.getStack()){
      stacks.append(it);
    }
    User user = User.builder()
    .job(req.getJob())
    .major(req.getMajor())
    .hobby(req.getHobby())
    .interest(interests.toString())
    .stack(stacks.toString())
    .etc(req.getEtc())
    .comment(req.getComment())
    .phone(req.getPhone())
    .github(req.getGithub())
    .blog(req.getBlog())
    .joinDate(req.getJoinDate()).build();

    return user;
  }

  @Override
  public List<UserDto.Response> toDto(List<User> list) {
    return null;
  }

  @Override
  public UserDto.Response toDto(User user) {
    List<String> interestList = new ArrayList<>();
    List<String> stackList = new ArrayList<>();
    String[] tmp = user.getInterest().split(",");
    for (int i=0; i<tmp.length; i++){
      interestList.add(tmp[i]);
    }
    String[] tmp2 = user.getStack().split(",");
    for (int i=0; i<tmp2.length; i++){
      interestList.add(tmp2[i]);
    }

    return UserDto.Response.builder()
    .id(user.getId())
    .email(user.getEmail())
    .password(user.getPassword())
    .name(user.getName())
.job(user.getJob())
        .major(user.getMajor())
        .hobby(user.getHobby())
    .interest(interestList)
        .stack(stackList)
        .etc(user.getEtc())
        .phone(user.getPhone())
        .github(user.getGithub())
        .blog(user.getBlog())
        .joinDate(user.getJoinDate()) .build();
  }
}
