package com.kucc.netflix.domain.entity;

@Entity
@Table(name="MESSAGE")
@Getter
@NoArgsConstructor
public class Message {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="id")
  private Long id;

  private Long sender;

  private Long receiver;

  private Date createdAt;
}
