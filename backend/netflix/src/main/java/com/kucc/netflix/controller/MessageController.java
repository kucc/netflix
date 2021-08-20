package com.kucc.netflix.controller;

import com.kucc.netflix.common.CommonResponse;
import com.kucc.netflix.domain.dto.MessageDto;
import com.kucc.netflix.domain.entity.User;
import com.kucc.netflix.service.MessageService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("messaage")
public class MessageController {
  private final MessageService messageService;


  public MessageController(MessageService messageService) {
    this.messageService = messageService;
  }

  @PostMapping("/{id}")
  public CommonResponse<MessageDto.Response> sendMessage(@AuthenticationPrincipal User sender, @PathVariable("id") Long receiver){
    return CommonResponse.ok(
        "success", messageService.sendMessage(sender.getId(), receiver)
    );
  }

  @GetMapping("/{id}")
  public CommonResponse<MessageDto.Response> readMessage(@PathVariable("id") Long id){
    return CommonResponse.ok(
        "success", messageService.readMessage(id)
    );
  }

  @GetMapping
  public CommonResponse<List<MessageDto.Response>> readMessageList(@AuthenticationPrincipal User sender){
    return CommonResponse.ok(
        "success", messageService.readMessageList(sender.getId())
    );
  }
}
