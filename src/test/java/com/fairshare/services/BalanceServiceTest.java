package com.fairshare.services;

import com.fairshare.entity.Balance;
import com.fairshare.repository.BalanceRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class BalanceServiceTest {

    @Mock
    BalanceRepository balanceRepository;

    @InjectMocks
    BalanceService balanceService;

    @BeforeEach
    void setUp() {

    }

    @Test
    void testGetNetBalance() {
        // Initialise our variables to pass through our test
        String user1 = "user1";
        String user2 =  "user2";
        Balance balance = new Balance();
        balance.setUser1Id(user1);
        balance.setUser2Id(user2);
        balance.setNetAmount(100.0);


        when(balanceRepository.findByUsers(user1, user2)).thenReturn(balance);

        Double result = balanceService.getNetBalance(user1, user2);

        assertEquals(100.0, result);
    }
}