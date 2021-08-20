package com.kucc.netflix.domain.repository;

import com.kucc.netflix.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
  Optional<User> findById(Long id);
  Optional<User> findByEmail(String email);

  @Query(value = "SELECT U FROM USER U WHERE U.STACK LIKE '%:tag%' OR U.INTEREST LIKE '%:tag%'",
  nativeQuery = true)
  Collection<User> findByTag(String tag);
}
