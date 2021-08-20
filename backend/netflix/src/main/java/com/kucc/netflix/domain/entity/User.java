package com.kucc.netflix.domain.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="USER")
@Getter
@NoArgsConstructor
public class User {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="id")
  private Long id;

  @Column(name="email")
  private String email;

  @Column(name="password")
  private String password;

  @Column(name="name")
  private String name;

  @Column(name="job")
  private String job;

  @Column(name="major")
  private String major;

  @Column(name="hobby")
  private String hobby;

  @Column(name="interest")
  private String interest;

  @Column(name="stack")
  private String stack;

  @Column(name="etc")
  private String etc;

  @Column(name="comment")
  private String comment;

  @Column(name="phone")
  private String phone;

  @Column(name="github")
  private String github;

  @Column(name="blog")
  private String blog;

  @Column(name="joinDate")
  private String joinDate;

}
