import axios, { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'

// axios.defaults.baseURL = 'https://fairshare-backend-174597868590.us-central1.run.app'
axios.defaults.baseURL = 'http://localhost:8080/'

export const useAxios = <T>(config: AxiosRequestConfig<any>): [boolean, T | undefined, string, () => void] => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        sendRequest();
    }, []);

    const request = () => {
        sendRequest();
    }

    const sendRequest = async () => {
        setLoading(true);

        axios(config)
            .then((response) => {
                    setError('')
                    setData(response.data)

                }
            )
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false));
    };

    return [loading, data, error, request];
}

interface UserShare {
    id: number;
    shareAmount: number;
    userId: number;
}

interface Expense {
  amount: number;
  categoryId: number;
  currency: string;
  date: Date;
  description: string;
  expenseId: number;
  groupId: number;
  payerId: number;
  userName: string;
  userShares: UserShare[];
  groupName?: string;
}

interface ExpenseListResponse {
  expenses : Expense[];
}

 export const GroupExpensesData = (groupId) => {
    const [loading, data, error, request] = useAxios<ExpenseListResponse>({method: 'GET', url: `expense/all-expenses?groupId=${groupId}`})

    return [loading, data, error, request];
}

interface Group {
    groupId: number;
    groupName: string;
    dateCreated: Date;
    numberOfUsers: number;
    totalSpent: number;
    updatedAt: Date;
    message: string;
}
  
interface GroupListResponse {
    groups : Group[];
}
  
export const GroupsData = (userId) => {
    const [loading, data, error, request] = useAxios<GroupListResponse>({method: 'GET', url: `users/groups?userId=${userId}`})
  
    return [loading, data, error, request];
}

interface GroupMember {
    balance: number;
    firstName: string;
}

interface GroupMemberListResponse {
  groupMembers : GroupMember[];
}

export const GroupMembersData = (groupId, userId) => {
    const [loading, data, error, request] = useAxios<GroupMemberListResponse>({method: 'GET', url: `group/${groupId}/${userId}/users`})

    return [loading, data, error, request];
}

export const AllExpenseData = <ExpenseListResponse>(userId: number): [boolean, ExpenseListResponse | undefined, string, () => void]=> {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<ExpenseListResponse>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        sendRequest();
    }, []);

    const request = () => {
        sendRequest();
    }

    const sendRequest = async () => {
        setLoading(true);
        setData([])

        axios.get(`users/groups?userId=${userId}`)
            .then((response) => {
                    response.data.forEach(group => {
                        axios.get(`expense/all-expenses?groupId=${group.groupId}`)
                            .then((response) => {
                                response.data.forEach(element => {
                                    element.groupName = group.groupName;
                                    setData(data => [...data, element])
                                })
                            }).catch((error) => {
                                setError(error.message)
                            })
                    })

                }
            )
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false));
    };

    return [loading, data, error, request];
}

export const AllMembersData = <GroupMemberListResponse>(userId: number): [boolean, GroupMemberListResponse | undefined, string, () => void]=> {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<GroupMemberListResponse>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        sendRequest();
    }, []);

    const request = () => {
        sendRequest();
    }

    const sendRequest = async () => {
        setLoading(true);
        setData([])

        axios.get(`users/groups?userId=${userId}`)
            .then((response) => {
                    response.data.forEach(element => {
                        axios.get(`group/${element.groupId}/${userId}/users`)
                            .then((response) => {
                                response.data.forEach(element => {
                                    setData(data => [...data, element])
                                })
                                // setData(data => [...data, response.data])
                            }).catch((error) => {
                                setError(error.message)
                            })
                    })

                }
            )
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false));
    };

    return [loading, data, error, request];
}

interface Friend {
    userId: number;
    firstName: string;
    LastName: string;
    email: string;
    username: string;
    senderId: number;
    recieverId: number;
    requestId: number;
}
  
interface FriendListResponse {
    friends : Friend[];
}

export const FriendsListData = (userId) => {
    const [loading, data, error, request] = useAxios<FriendListResponse>({method: 'GET', url: `friends/list?userId=${userId}`})

    return [loading, data, error, request];
}

export const PendingRequestData = (userId) => {
    const [loading, data, error, request] = useAxios<FriendListResponse>({method: 'GET', url: `friends/pendingRequests?userId=${userId}`})

    return [loading, data, error, request];
}