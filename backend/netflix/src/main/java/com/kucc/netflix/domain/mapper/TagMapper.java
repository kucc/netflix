package com.kucc.netflix.domain.mapper;

import com.kucc.netflix.domain.dto.TagDto;
import com.kucc.netflix.domain.entity.Tag;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface TagMapper {
  TagMapper INSTANCE = Mappers.getMapper(TagMapper.class);

  Tag toEntity(TagDto.Request dto);

  TagDto.Response toDto(Tag tag);
}
