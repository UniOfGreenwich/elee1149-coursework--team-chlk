package com.fairshare.DTO;

import java.util.List;

public class FriendsListDTO {
    private List<FriendsDTO> friends;

    public FriendsListDTO(List<FriendsDTO> friends) {
        this.friends = friends;
    }

    public List<FriendsDTO> getFriends() {
        return friends;
    }

    public void setFriends(List<FriendsDTO> friends) {
        this.friends = friends;
    }
}
