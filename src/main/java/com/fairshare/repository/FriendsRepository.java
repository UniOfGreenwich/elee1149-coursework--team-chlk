package com.fairshare.repository;

import com.fairshare.entity.Friends;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FriendsRepository extends JpaRepository<Friends, Integer> {
    List<Friends> findByUserIdandStatus(Integer userId, Boolean status);
    List<Friends> findByFriendUserIdandStatus(Integer userId, Boolean status);

    @Query("SELECT CASE WHEN COUNT(f) > 0 THEN true ELSE false END FROM Friends f WHERE (f.userId = :userId AND f.friendUserId = :friendUserId AND f.status = true) OR (f.userId = :friendUserId AND f.friendUserId = :userId AND f.status = true)")
    boolean existsFriendship(@Param("userId") Integer userId, @Param("friendUserId") Integer friendUserId);

}
