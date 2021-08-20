package com.kucc.netflix.domain.mapper;

import com.kucc.netflix.domain.dto.MessageDto;
import com.kucc.netflix.domain.entity.Message;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface MessageMapper {
  MessageMapper INSTANCE = Mappers.getMapper(MessageMapper.class);

  Message toEntity(MessageDto.Request dto);

  MessageDto.Response toDto(Message msg);
}
