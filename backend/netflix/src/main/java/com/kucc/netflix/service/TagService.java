package com.kucc.netflix.service;

import com.kucc.netflix.domain.dto.TagDto;
import com.kucc.netflix.domain.entity.User;
import com.kucc.netflix.domain.mapper.TagMapper;
import com.kucc.netflix.domain.mapper.UserMapper;
import com.kucc.netflix.domain.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService{

  private final TagRepository tagRepository;

  public TagService(TagRepository tagRepository){
    this.tagRepository = tagRepository;
  }

  public List<TagDto.Response> getTagList(){
    return TagMapper.INSTANCE.toDto(tagRepository.findAll());
  }

  public TagDto.Response makeTag(TagDto.Request req){
    return TagMapper.INSTANCE.toDto(tagRepository.save(TagMapper.INSTANCE.toEntity(req)));
  }


}
