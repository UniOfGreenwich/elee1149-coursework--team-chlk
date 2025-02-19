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
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
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
    public void testUpdateBalance() {
        String payerId = "payerId";
        String payeeId = "payeeId";
        double amount = 100.0;
        Balance balance = new Balance();
        balance.setUser1Id(payerId);
        balance.setUser2Id(payeeId);
        balance.setNetAmount(100.0);

        when(balanceRepository.findByUsers(payerId, payeeId)).thenReturn(balance);

        balanceService.updateBalance(payerId, payeeId, amount);

        assertEquals(200.0, balance.getNetAmount());

        verify(balanceRepository, times(1)).save(balance);
    }

    @Test
    public void testUpdateBalanceWhenBalanceIsNull() {
        String payerId = "payerId";
        String payeeId = "payeeId";
        double amount = 100.0;


        when(balanceRepository.findByUsers(payerId, payeeId)).thenReturn(null);

        balanceService.updateBalance(payerId, payeeId, amount);


        verify(balanceRepository, times(1)).save((any(Balance.class)));
    }

    @Test
    void testUpdateBalanceWhenUser2IsUser1() {
        String payerId = "payerId";
        String payeeId = "payeeId";
        double amount = 100.0;
        Balance balance = new Balance();
        balance.setUser1Id(payeeId);
        balance.setUser2Id(payerId);
        balance.setNetAmount(100.0);

        when(balanceRepository.findByUsers(payerId, payeeId)).thenReturn(balance);

        balanceService.updateBalance(payerId, payeeId, amount);

        assertEquals(0.0, balance.getNetAmount());
        verify(balanceRepository, times(1)).save(balance);
    }


    @Test
    void testGetNetBalance() {
        /* Create and initialise our variables that we need to pass through the test
         this will match the parameters of the method you are testing. */
        String user1 = "user1";
        String user2 =  "user2";
        Balance balance = new Balance(); //Creat a new balance object
        balance.setUser1Id(user1); //Set the user1Id field of the Balance object to user1
        balance.setUser2Id(user2); // Ditto for user2
        balance.setNetAmount(100.0); //Set the netAmount field of the Balance object to 100.0

        //This mocks the behaviour of the balanceRepository.findByUsers method
        when(balanceRepository.findByUsers(user1, user2)).thenReturn(balance);

        // Call the method we are testing and store it in a result variable
        Double result = balanceService.getNetBalance(user1, user2);

        //Assert that the result is equal to the 100.0 we set intially
        assertEquals(100.0, result);
    }
}