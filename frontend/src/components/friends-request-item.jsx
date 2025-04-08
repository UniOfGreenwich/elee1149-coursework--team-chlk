import { useState, useEffect, useCallback } from 'react'
import "../styles/friends.css";
import { AcceptFriendRequest, DeclineFriendRequest } from "../methods/use-axios";
import { showSuccessToast } from "../methods/http-error-handler";
import PropTypes from 'prop-types';

export function FriendsRequestItem({firstName, lastName, email, username, requestId, reload}) {
  const [acceptTrigger, setAcceptTrigger] = useState(false)
  const [declineTrigger, setDeclineTrigger] = useState(false)

  const [acceptLoading, acceptData, acceptError, acceptRequest] = AcceptFriendRequest(requestId)
  const [declineLoading, declineData, declineError, declineRequest] = DeclineFriendRequest(requestId)

  if(acceptData && JSON.stringify(acceptData) !== '[]' ) {
    showSuccessToast(acceptData)
    reload()
  }

  if(declineData && JSON.stringify(declineData) !== '[]' ) {
    showSuccessToast(declineData)
    reload()
  }

  const sendAccept = useCallback(() => {
    acceptRequest()
  })

  const sendDecline = useCallback(() => {
    declineRequest()
  })

  useEffect(() => {
    if (acceptTrigger) {
      sendAccept()
      setAcceptTrigger(false)
    }
    if (declineTrigger) {
      sendDecline()
      setDeclineTrigger(false)
    }
  }, [acceptTrigger, declineTrigger])

    const handleDecline = async e => {
        e.preventDefault();
        setDeclineTrigger(true)
      }

      const handleAccept = async e => {
        e.preventDefault();
        setAcceptTrigger(true)
      }

    return (
        <div className="friend-request-item">
            <p className="request-username">{username}</p>
            <p className="request-name">{`${firstName} ${lastName}`}</p>
            <p className="request-email">{email}</p>
            <div className="request-user-decision">
                <button className="request-accept-button" onClick={handleAccept}>
                    Accept
                </button>
                <button className="request-decline-button" onClick={handleDecline}>
                    Decline
                </button>
            </div>
        </div>
    )
}

FriendsRequestItem.propTypes = {
  reload: PropTypes.func.isRequired,
}

