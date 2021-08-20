package com.kucc.netflix.domain.mapper;

import com.kucc.netflix.domain.dto.UserDto;
import com.kucc.netflix.domain.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

public interface UserMapper {
  User toEntity(UserDto.Request dto);
  List<UserDto.Response> toDto(List<User> list);
  UserDto.Response toDto(User user);
}
