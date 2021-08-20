package com.kucc.netflix.controller;

import com.kucc.netflix.common.CommonResponse;
import com.kucc.netflix.domain.dto.TagDto;
import com.kucc.netflix.domain.dto.UserDto;

import com.kucc.netflix.service.TagService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("tag")
public class TagController {

  private final TagService tagService;

  public TagController(TagService tagService) {
      this.tagService = tagService;
  }

  @GetMapping
  public CommonResponse<List<TagDto.Response>> getTagList() {

    return CommonResponse.ok(null, tagService.getTagList());
  }

  @PostMapping
  public CommonResponse<TagDto.Response> makeTag(@RequestBody TagDto.Request req) {

    return CommonResponse.ok(null,tagService.makeTag(req));

  }

}
