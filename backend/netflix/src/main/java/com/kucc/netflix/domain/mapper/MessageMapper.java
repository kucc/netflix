package com.kucc.netflix.domain.mapper;

import com.kucc.netflix.domain.dto.MessageDto;
import com.kucc.netflix.domain.dto.TagDto;
import com.kucc.netflix.domain.entity.Message;
import com.kucc.netflix.domain.entity.Tag;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface MessageMapper {
  MessageMapper INSTANCE = Mappers.getMapper(MessageMapper.class);

  Message toEntity(MessageDto.Request dto);
  List<MessageDto.Response> toDto(List<Message> list);
  MessageDto.Response toDto(Message msg);
}
