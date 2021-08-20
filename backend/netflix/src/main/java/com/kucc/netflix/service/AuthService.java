package com.kucc.netflix.service;

import com.kucc.netflix.domain.dto.UserDto;
import com.kucc.netflix.domain.entity.User;
import com.kucc.netflix.domain.mapper.UserMapper;
import com.kucc.netflix.domain.mapper.UserMapperImpl;
import com.kucc.netflix.domain.repository.UserRepository;
import com.kucc.netflix.exception.UserNotFoundException;
import com.kucc.netflix.security.JwtTokenProvider;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService{
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtTokenProvider jwtTokenProvider;
  private final UserMapperImpl userMapper;

  public AuthService(UserRepository userRepository,PasswordEncoder passwordEncoder, JwtTokenProvider jwtTokenProvider, UserMapperImpl userMapper) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
    this.jwtTokenProvider = jwtTokenProvider;
    this.userMapper = userMapper;
  }


  public String Login(UserDto.Login req){
    if(!this.passwordMatch(req.getPassword(), req.getEmail())){
      throw new UserNotFoundException();
    }
    return createTokenById(req.getEmail());
  }

  public String createTokenById(String email){
    User user = userRepository.findByEmail(email).orElseGet(
        () -> { throw new UserNotFoundException();}
    );
    return jwtTokenProvider.createToken(String.valueOf(user.getId()));
  }

  public Boolean passwordMatch(String password, String email){
    User user = userRepository.findByEmail(email).orElseGet(
        () -> { throw new UserNotFoundException();}
    );
    return passwordEncoder.matches(password, user.getPassword());
  }

  public UserDto.Response signUp(UserDto.Login req){
    User user = User.builder()
        .email(req.getEmail())
        .password(passwordEncoder.encode(req.getPassword()))
        .build();
    return userMapper.toDto(userRepository.save(user));
  }

}
