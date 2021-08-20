package com.kucc.netflix.service;

import com.kucc.netflix.domain.dto.UserDto;
import com.kucc.netflix.domain.entity.User;
import com.kucc.netflix.domain.mapper.UserMapper;
import com.kucc.netflix.domain.repository.UserRepository;
import com.kucc.netflix.exception.UserNotFoundException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class UserService implements UserDetailsService {

  private final UserRepository userRepository;

  public UserService(UserRepository userRepository){
    this.userRepository = userRepository;
  }

  public UserDto.Response getUserProfile(Long id){
    return userRepository.findById(id)
        .map(user -> {
          if (!user.getUseYn()){
            throw new UserNotFoundException();
          }
          return UserMapper.INSTANCE.toDto(user);
        })
        .orElseGet(() ->{
          throw new UserNotFoundException();
        });
  }

  public List<UserDto.Response> getUserProfileList(String tag){
    Collection<User> collection = userRepository.findByTag(tag);
    List<User> userList = new ArrayList<User>(collection);
    return UserMapper.INSTANCE.toDto(userList);
  }

  public  UserDto.Response writeUserProfile (UserDto.Request req){
    User user = userRepository.save(UserMapper.INSTANCE.toEntity(req));
    return UserMapper.INSTANCE.toDto(user);
  }

  public  UserDto.Response editUserProfile (Long id, UserDto.Request req){
    return userRepository.findById(id)
        .map(user -> {

//         for(){
//
//         }
          user.setBlog(req.getBlog())
              .setComment(req.getComment())
              .setEtc(req.getEtc())
              .setGithub(req.getGithub())
              .setHobby(req.getHobby())
              .setInterest(req.getInterest())
              .setJob(req.getJob())
              .setMajor(req.getMajor())
              .setName(req.getName())
              .setPhone(req.getPhone())
              .setStack(req.getStack())
              .setJoinDate(req.getJoinDate());
          return user;
        })
        .map(userRepository::save)
        .map(UserMapper.INSTANCE::toDto)
        .orElseGet(() -> {
          throw new UserNotFoundException();
        });
  }

  public  UserDto.Response toggleProfile (Long id){
    return userRepository.findById(id)
    .map(user -> {
      Boolean useYn = user.getUseYn();
      user.setUseYn(!useYn);
      return UserMapper.INSTANCE.toDto(userRepository.save(user));
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
