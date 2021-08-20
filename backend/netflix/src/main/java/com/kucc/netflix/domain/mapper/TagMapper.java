package com.kucc.netflix.domain.mapper;

import com.kucc.netflix.domain.dto.TagDto;
import com.kucc.netflix.domain.dto.UserDto;
import com.kucc.netflix.domain.entity.Tag;
import com.kucc.netflix.domain.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface TagMapper {
  TagMapper INSTANCE = Mappers.getMapper(TagMapper.class);

  Tag toEntity(TagDto.Request dto);
  List<TagDto.Response> toDto(List<Tag> list);
  TagDto.Response toDto(Tag tag);
}
