package com.fairshare.controllers;

import com.fairshare.services.BalanceService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class BalanceControllerTests {
    @Mock
    private BalanceService balanceService;

    @InjectMocks
    private BalanceController balanceController;

    @Test
    void testUpdateBalance() {
        Integer payerId = 1;
        Integer payeeId = 2;
        Double amount = 50.0;

        doNothing().when(balanceService).updateBalance(payerId, payeeId, amount);

        balanceController.updateBalance(payerId, payeeId, amount);

        verify(balanceService, times(1)).updateBalance(payerId, payeeId, amount);
    }



    @Test
    void testGetNetBalance() {
        Integer user1 = 1;
        Integer user2 = 2;
        Double expectedBalance = 50.0;

        when(balanceService.getNetBalance(user1, user2)).thenReturn(expectedBalance);

        Double result = balanceController.getNetBalance(user1, user2);

        assertEquals(expectedBalance, result);
        verify(balanceService, times(1)).getNetBalance(user1, user2);
    }
}
