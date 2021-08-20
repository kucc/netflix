package com.kucc.netflix.security;

import com.kucc.netflix.domain.entity.User;
import com.kucc.netflix.service.UserService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Date;

@Component
@RequiredArgsConstructor
public class JwtTokenProvider {
  
  private String secretKey ="asdfasdfasdfasdfasdfasdfasdfasdfasdfsadf";

  private final long tokenValidTime = 30 * 60 * 1000L;

  private final UserService authService;

  @PostConstruct
  protected void init(){
    secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
  }

  public String createToken(String userPk){
    Claims claims = Jwts.claims().setSubject(userPk);
    Date now = new Date();

    return Jwts.builder()
        .setClaims(claims)
        .setIssuedAt(now)
        .setExpiration(new Date(now.getTime() + tokenValidTime))
        .signWith(SignatureAlgorithm.HS256, secretKey)
        .compact();
  }

  public Authentication getAuthentication(String token){
    User user = authService.loadUserByUsername(this.getUserPk(token));
    return new UsernamePasswordAuthenticationToken(user, "", user.getAuthorities());
  }

  // 토큰에서 회원 정보 추출
  public String getUserPk(String token){
    return Jwts.parserBuilder().setSigningKey(secretKey)
    .build().parseClaimsJws(token).getBody().getSubject();
  }

  // request의 헤더에서 token을 가져온다.
  public String resolveToken(HttpServletRequest request){
    return request.getHeader("X-AUTH-TOKEN");
  }

  //토큰의 유효성 확인
  public boolean validateToken(String jwtToken){
    try{
      Jws<Claims> claims = Jwts.parserBuilder().setSigningKey(secretKey)
          .build().parseClaimsJws(jwtToken);
      return !claims.getBody().getExpiration().before(new Date());
    } catch (Exception e){
      return false;
    }
  }
}