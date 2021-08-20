package com.kucc.netflix.domain.mapper;

import com.kucc.netflix.domain.dto.UserDto;
import com.kucc.netflix.domain.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {
  UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

  User toEntity(UserDto.Request dto);

  UserDto.Response toDto(User user);
}
