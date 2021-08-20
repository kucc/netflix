package com.kucc.netflix.domain.repository;

import com.kucc.netflix.domain.entity.Message;
import com.kucc.netflix.domain.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
  List<Message> findAllByReceiver(Long receiver);
}
