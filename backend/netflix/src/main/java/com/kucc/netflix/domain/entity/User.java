package com.kucc.netflix.domain.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.*;

@Entity
@Table(name="USER")
@Getter
@NoArgsConstructor
@Accessors(chain=true)
public class User {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="id")
  private Long id;

  @Column(name="email")
  @Setter
  private String email;

  @Column(name="password")
  @Setter
  private String password;

  @Column(name="name")
  @Setter
  private String name;

  @Column(name="job")
  @Setter
  private String job;

  @Column(name="major")
  @Setter
  private String major;

  @Column(name="hobby")
  @Setter
  private String hobby;

  @Column(name="interest")
  @Setter
  private String interest;

  @Column(name="stack")
  @Setter
  private String stack;

  @Column(name="etc")
  @Setter
  private String etc;

  @Column(name="comment")
  @Setter
  private String comment;

  @Column(name="phone")
  @Setter
  private String phone;

  @Column(name="github")
  @Setter
  private String github;

  @Column(name="blog")
  @Setter
  private String blog;

  @Column(name="joinDate")
  @Setter
  private String joinDate;

  @Column(name="useYn")
  @Setter
  private Boolean useYn;

  @Builder
  public User(String email, String password){
    this.email = email;
    this.password = password;
    this.useYn = true;
  }

}
