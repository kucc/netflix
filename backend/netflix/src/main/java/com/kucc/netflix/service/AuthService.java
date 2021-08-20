package com.kucc.netflix.service;

import com.kucc.netflix.domain.dto.UserDto;
import com.kucc.netflix.domain.entity.User;
import com.kucc.netflix.domain.repository.UserRepository;
import com.kucc.netflix.exception.UserNotFoundException;
import com.kucc.netflix.security.JwtTokenProvider;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService  implements UserDetailsService {
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtTokenProvider jwtTokenProvider;

  public AuthService(UserRepository userRepository,PasswordEncoder passwordEncoder, JwtTokenProvider jwtTokenProvider) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
    this.jwtTokenProvider = jwtTokenProvider;
  }

  @Override
  public User loadUserByUsername(String userId) throws UsernameNotFoundException {
    return userRepository.findById(Long.parseLong(userId))
        .orElseGet(() -> {
          throw new UserNotFoundException();
        });
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

}
