package com.fairshare.controllers;

import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class FriendsControllerTest {
    @Mock
    private FriendsController friendsController;

    @InjectMocks
    private FriendsController friendsController1;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
}
