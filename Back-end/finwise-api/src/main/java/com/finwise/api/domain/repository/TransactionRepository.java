package com.finwise.api.domain.repository;

import com.finwise.api.domain.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserEmailOrderByTransactionDateDesc(String email);
    List<Transaction> findByUserEmailAndTransactionDateBetween(String email, LocalDateTime from, LocalDateTime to);
}
