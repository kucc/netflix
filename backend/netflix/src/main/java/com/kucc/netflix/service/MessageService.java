package com.kucc.netflix.service;

import com.kucc.netflix.domain.dto.MessageDto;
import com.kucc.netflix.domain.dto.UserDto;
import com.kucc.netflix.domain.entity.Message;
import com.kucc.netflix.domain.entity.User;
import com.kucc.netflix.domain.mapper.MessageMapper;
import com.kucc.netflix.domain.repository.MessageRepository;
import com.kucc.netflix.exception.UserNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.Date;
import java.util.List;

@Service
public class MessageService {
  private final MessageRepository messageRepository;

  public MessageService(MessageRepository messageRepository) {
    this.messageRepository = messageRepository;
  }

  public MessageDto.Response sendMessage(Long sender, Long receiver){
    Message message = Message.builder()
        .sender(sender)
        .receiver(receiver)
        .createdAt(new Date())
        .build();
    return MessageMapper.INSTANCE.toDto(message);
  }

  public MessageDto.Response readMessage(Long id){
    return messageRepository.findById(id)
        .map(MessageMapper.INSTANCE::toDto).orElseGet(
        () -> { throw new UserNotFoundException();}
    );
  }

  public List<MessageDto.Response> readMessageList(Long id){
    List<Message> list = messageRepository.findAllByReceiver(id);
    return MessageMapper.INSTANCE.toDto(list);
  }

}
