package com.kucc.netflix.domain.entity;

@Entity
@Table(name="TAG")
@Getter
@NoArgsConstructor
public class Tag {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="id")
  private Long id;

  @Column(name="name")
  private String name;
}
