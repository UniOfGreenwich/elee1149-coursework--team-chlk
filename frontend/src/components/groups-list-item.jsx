import "../styles/groups.css"
import {differenceInWeeks, differenceInYears, differenceInMonths, differenceInDays, format, isToday, isYesterday} from "date-fns"


export function GroupsListItem(props) {
    return (
        <div className="group-list-item">
            <div className="group-details-column">
                <p className="group-name">{props.groupName}</p>
                <p className="group-date-created">{`Date Created - ${format(props.dateCreated, "dd MMM yyyy")}`}</p>
            </div>
            <div className="group-update-column">
                <p className="group-last-updated-title">Last Updated:</p>
                <p className="group-last-updated">{getLastUpdated(props.updatedAt)}</p>
            </div>
            <div className="group-spent-column">
                <p className="group-total-spent-title">Total Spent:</p>
                <p className="group-total-spent">{Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(props.totalSpent)}</p>
            </div>
            <div className="group-users-box">
                <p className="group-user">{props.numberOfUsers}</p>
            </div>
        </div>
    )
}

function getLastUpdated (updatedDate) {
    const today = new Date()
    if(isToday(updatedDate)) {
        return "Today"
    } else if(isYesterday(updatedDate)) {
        return "Yesterday"
    } else if(differenceInYears(today, updatedDate)>0){
        return `${differenceInYears(today, updatedDate)} Year${differenceInYears(today, updatedDate) > 1 ? "s" : null } Ago`
    } else if(differenceInMonths(today, updatedDate)>0) {
        return `${differenceInMonths(today, updatedDate)} Month${differenceInMonths(today, updatedDate) > 1 ? "s" : null } Ago`
    } else if(differenceInWeeks(today, updatedDate)>0) {
        return `${differenceInWeeks(today, updatedDate)} Week${differenceInWeeks(today, updatedDate) > 1 ? "s" : "" } Ago`
    } else {
        return `${differenceInDays(today, updatedDate)} Days Ago`
    } 
}

