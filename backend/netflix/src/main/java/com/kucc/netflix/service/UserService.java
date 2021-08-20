package com.kucc.netflix.service;

import com.kucc.netflix.domain.dto.UserDto;
import com.kucc.netflix.domain.entity.User;
import com.kucc.netflix.domain.mapper.UserMapper;
import com.kucc.netflix.domain.mapper.UserMapperImpl;
import com.kucc.netflix.domain.repository.UserRepository;
import com.kucc.netflix.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class UserService implements UserDetailsService {

  private final UserRepository userRepository;

  @Autowired
  private final UserMapperImpl userMapper;

  public UserService(UserRepository userRepository, UserMapperImpl userMapper){
    this.userRepository = userRepository;
    this.userMapper = userMapper;
  }

  public UserDto.Response getUserProfile(Long id){
    return userRepository.findById(id)
        .map(user -> {
          if (!user.getUseYn()){
            throw new UserNotFoundException();
          }
          return userMapper.toDto(user);
        })
        .orElseGet(() ->{
          throw new UserNotFoundException();
        });
  }

  public List<UserDto.Response> getUserProfileList(String tag){
    Collection<User> collection = userRepository.findByTag(tag);
    List<User> userList = new ArrayList<User>(collection);
    return userMapper.toDto(userList);
  }

  public  UserDto.Response writeUserProfile (UserDto.Request req){
    User user = userRepository.save(userMapper.toEntity(req));
    return userMapper.toDto(user);
  }

  public  UserDto.Response editUserProfile (Long id, UserDto.Request req){
    return userRepository.findById(id)
        .map(user -> {
          StringBuilder interests = new StringBuilder();
          for(String it:req.getInterest()){
            interests.append(it);
          }

          StringBuilder stacks = new StringBuilder();
          for(String it: req.getStack()){
            stacks.append(it);
          }
          user.setBlog(req.getBlog())
              .setComment(req.getComment())
              .setEtc(req.getEtc())
              .setGithub(req.getGithub())
              .setHobby(req.getHobby())
              .setInterest(interests.toString())
              .setJob(req.getJob())
              .setMajor(req.getMajor())
              .setName(req.getName())
              .setPhone(req.getPhone())
              .setStack(stacks.toString())
              .setJoinDate(req.getJoinDate());
          return user;
        })
        .map(userRepository::save)
        .map(userMapper::toDto)
        .orElseGet(() -> {
          throw new UserNotFoundException();
        });
  }

  public  UserDto.Response toggleProfile (Long id){
    return userRepository.findById(id)
    .map(user -> {
      Boolean useYn = user.getUseYn();
      user.setUseYn(!useYn);
      return userMapper.toDto(userRepository.save(user));
    }).orElseGet(() -> {
      throw new UserNotFoundException();
    });
  }

  @Override
  public User loadUserByUsername(String userId) throws UsernameNotFoundException {
    return userRepository.findById(Long.parseLong(userId))
        .orElseGet(() -> {
          throw new UserNotFoundException();
        });
  }

}
