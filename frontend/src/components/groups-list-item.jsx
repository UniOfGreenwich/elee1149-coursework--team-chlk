import "../styles/groups.css"
import {differenceInCalendarWeeks, differenceInCalendarYears, differenceInCalendarMonths, differenceInCalendarDays, format, isToday, isYesterday} from "date-fns"


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
                <p className="group-total-spent">£{props.totalSpent.toFixed(2)}</p>
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
    } else if(differenceInCalendarYears(today, updatedDate)>0){
        return `${differenceInCalendarYears(today, updatedDate)} Years Ago`
    } else if(differenceInCalendarMonths(today, updatedDate)>0) {
        return `${differenceInCalendarYears(today, updatedDate)} Months Ago`
    } else if(differenceInCalendarWeeks(today, updatedDate)>0) {
        return `${differenceInCalendarYears(today, updatedDate)} Weeks Ago`
    } else {
        return `${differenceInCalendarDays(today, updatedDate)} Days Ago`
    }
}

