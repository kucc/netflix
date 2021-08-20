package com.kucc.netflix.domain.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="MESSAGE")
@Getter @Builder
@NoArgsConstructor
public class Message {

  @Id
  @GeneratedValue(strategy= GenerationType.IDENTITY)
  @Column(name="id")
  private Long id;

  @Column(name="sender")
  private Long sender;

  @Column(name="receiver")
  private Long receiver;

  @Column(name="createdAt")
  private Date createdAt;
}
