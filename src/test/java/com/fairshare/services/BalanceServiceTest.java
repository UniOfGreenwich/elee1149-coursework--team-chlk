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

    private static final Integer PAYER_ID = 1;
    private static final Integer PAYEE_ID = 2;
    private static final double DEFAULT_AMOUNT = 100.0;

    private Balance defaultBalance;

    @BeforeEach
    void setUp() {
        defaultBalance = new Balance();
        defaultBalance.setUser1Id(PAYER_ID);
        defaultBalance.setUser2Id(PAYEE_ID);
        defaultBalance.setNetAmount(DEFAULT_AMOUNT);
    }

    @Test
     void testUpdateBalance() {
        when(balanceRepository.findByUsers(PAYER_ID, PAYEE_ID)).thenReturn(defaultBalance);

        balanceService.updateBalance(PAYER_ID, PAYEE_ID, DEFAULT_AMOUNT);

        assertEquals(200.0, defaultBalance.getNetAmount());

        verify(balanceRepository, times(1)).save(defaultBalance);
    }

    @Test
    public void testUpdateBalanceWhenBalanceIsNull() {
        when(balanceRepository.findByUsers(PAYER_ID, PAYEE_ID)).thenReturn(null);

        balanceService.updateBalance(PAYER_ID, PAYEE_ID, DEFAULT_AMOUNT);


        verify(balanceRepository, times(1)).save((any(Balance.class)));
    }

    @Test
    void testUpdateBalanceWhenUser2IsUser1() {
        Balance balance = new Balance();
        balance.setUser1Id(PAYEE_ID);
        balance.setUser2Id(PAYER_ID);
        balance.setNetAmount(100.0);

        when(balanceRepository.findByUsers(PAYER_ID, PAYEE_ID)).thenReturn(balance);

        balanceService.updateBalance(PAYER_ID, PAYEE_ID, DEFAULT_AMOUNT);

        assertEquals(0.0, balance.getNetAmount());
        verify(balanceRepository, times(1)).save(balance);
    }


    @Test
    void testGetNetBalance() {
        /* Create and initialise our variables that we need to pass through the test
         this will match the parameters of the method you are testing. */
        Integer user1 = 1;
        Integer user2 =  2;
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