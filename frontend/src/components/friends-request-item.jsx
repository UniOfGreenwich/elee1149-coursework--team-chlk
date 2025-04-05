import axios from "axios";
import { useEffect, useState } from 'react'
import "../styles/friends.css";
import Alert from '@mui/material/Alert'

async function acceptRequest (requestId) {
    return axios.post(
      `friends/acceptFriendRequest?requestId=${requestId}`,
      {config: {'Content-Type': 'text/plain;charset=UTF-8'}}
    )
    .then(response => response.data)
  }

  async function declineRequest (requestId) {
    return axios.delete(
        `friends/declineRequest?requestId=${requestId}`,
        {'Content-Type': 'text/plain;charset=UTF-8'}
    )
    .then(response => response.data)
  }

export function FriendsRequestItem(props) {

    const handleDecline = async e => {
        e.preventDefault();
        const decline = await declineRequest(props.requestId);
        console.log(decline)
        window.location.reload()
        //return <Alert>{decline}</Alert>
      }

      const handleAccept = async e => {
        e.preventDefault();
        const accept = await acceptRequest(props.requestId);
        console.log(accept)
        window.location.reload()
        //return <Alert>{accept}</Alert>
      }

    return (
        <div className="friend-request-item">
            <p className="request-username">{props.username}</p>
            <p className="request-name">{`${props.firstName} ${props.lastName}`}</p>
            <p className="request-email">{props.email}</p>
            <div className="request-user-decision">
                <div className="request-accept-button" onClick={handleAccept}>
                    <p className="button-name">Accept</p>
                </div>
                <div className="request-decline-button" onClick={handleDecline}>
                    <p className="button-name">Decline</p>
                </div>
            </div>
        </div>
    )
}

