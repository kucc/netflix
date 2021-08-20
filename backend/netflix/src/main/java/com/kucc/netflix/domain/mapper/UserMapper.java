package com.kucc.netflix.domain.mapper;

import com.kucc.netflix.domain.dto.UserDto;
import com.kucc.netflix.domain.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface UserMapper {
  UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

  @Mappings({
      @Mapping(target="email", ignore=true),
      @Mapping(target="password", ignore=true),
     // @Mapping(target="useYn",ignore=true),
      @Mapping(target="authorities", ignore = true)
  })
  User toEntity(UserDto.Request dto);
  List<UserDto.Response> toDto(List<User> list);


  UserDto.Response toDto(User user);
}
