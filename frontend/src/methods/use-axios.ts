import axios, { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
import { httpErrorHandler } from './http-error-handler';

// axios.defaults.baseURL = 'https://fairshare-backend-174597868590.us-central1.run.app'
axios.defaults.baseURL = 'http://localhost:8080/'

export const useAxios = <T>(config: AxiosRequestConfig<any>, loadOnStart: boolean=true): [boolean, T[] | undefined, string, () => void, (action: T[] | ((prevState: T[]) => T[])) => void] => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');


    useEffect(() => {
        if (loadOnStart) sendRequest() 
        else setLoading(false)
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
                httpErrorHandler({
                    err: error.response,
                    errorKeys: ['field1', 'field2'],
                    setFieldErrors: setError,
                    onCustomError: () => console.log('Custom error handling')
                })
            })
            .finally(() => setLoading(false));
    };

    return [loading, data, error, request, setData];
}

interface UserShare {
    id?: number;
    shareAmount: number;
    userId: number;
}

interface Expense {
  amount: number;
  categoryId: number;
  currency: string;
  date: Date;
  description: string;
  expenseId?: number;
  groupId: number;
  payerId?: number;
  userId?: number;
  userName?: string;
  userShares: UserShare[];
  groupName?: string;
}

 export const GroupExpensesData = (groupId: any): [boolean, Expense[] | undefined, string, () => void] => {
    const [loading, data, error, request] = useAxios<Expense>({method: 'GET', url: `expense/all-expenses?groupId=${groupId}`})

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
  
export const GroupsData = (userId: any): [boolean, Group[] | undefined, string, () => void] => {
    const [loading, data, error, request] = useAxios<Group>({method: 'GET', url: `users/groups?userId=${userId}`})
  
    return [loading, data, error, request];
}

interface GroupMember {
    groupId?: number;
    balance: number;
    email: string;
    firstName: string;
    lastName: string;
    userId: number;
    username: string;
}

export const GroupMembersData = (groupId: any, userId: any): [boolean, GroupMember[] | undefined, string, () => void] => {
    const [loading, data, error, request] = useAxios<GroupMember>({method: 'GET', url: `group/${groupId}/${userId}/users`})

    return [loading, data, error, request];
}

export const AllExpenseData = (userId: number): [boolean, Expense[] | undefined, string, () => void]=> {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Expense[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        sendRequest();
    }, []);

    const request = () => {
        setData([])
        sendRequest();
    }

    const sendRequest = async () => {
        setLoading(true);
        setData([])

        axios.get(`users/groups?userId=${userId}`)
            .then((groups) => {
                    groups.data.forEach((group: Group) => {
                        axios.get(`expense/all-expenses?groupId=${group.groupId}`)
                            .then((expenses) => {
                                expenses.data.forEach((expense: Expense) => {
                                    expense.groupName = group.groupName;
                                    setData(data => [...data, expense])
                                })
                            })
                            .catch((error) => {
                                httpErrorHandler({
                                    err: error.response,
                                    errorKeys: ['field1', 'field2'],
                                    setFieldErrors: setError,
                                    onCustomError: () => console.log('Custom error handling')
                                })
                            })
                    })

                }
            )
            .catch((error) => {
                httpErrorHandler({
                    err: error.response,
                    errorKeys: ['field1', 'field2'],
                    setFieldErrors: setError,
                    onCustomError: () => console.log('Custom error handling')
                })
            })
            .finally(() => {
                setLoading(false);
            })
    };

    return [loading, data, error, request];
}

export const AllMembersData = (userId: number): [boolean, GroupMember[] | undefined, string, () => void]=> {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<GroupMember[]>([]);
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
            .then((groups) => {
                    groups.data.forEach((group: Group) => {
                        axios.get(`group/${group.groupId}/${userId}/users`)
                            .then((groupMembers) => {
                                groupMembers.data.forEach((groupMember: GroupMember) => {
                                    setData(data => [...data, groupMember]) 
                                })
                            })
                            .catch((error) => {
                                httpErrorHandler({
                                    err: error.response,
                                    errorKeys: ['field1', 'field2'],
                                    setFieldErrors: setError,
                                    onCustomError: () => console.log('Custom error handling')
                                })
                            })
                    })

                }
            )
            .catch((error) => {
                httpErrorHandler({
                    err: error.response,
                    errorKeys: ['field1', 'field2'],
                    setFieldErrors: setError,
                    onCustomError: () => console.log('Custom error handling')
                })
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

export const FriendsListData = (userId: any): [boolean, Friend[] | undefined, string, () => void] => {
    const [loading, data, error, request] = useAxios<Friend>({method: 'GET', url: `friends/list?userId=${userId}`})

    return [loading, data, error, request];
}

export const PendingRequestData = (userId: any): [boolean, Friend[] | undefined, string, () => void] => {
    const [loading, data, error, request] = useAxios<Friend>({method: 'GET', url: `friends/pendingRequests?userId=${userId}`})

    return [loading, data, error, request];
}

interface SignupPayload {
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string
}

interface SignupResponse {
    message: string,
    success: boolean,
    userId: number
}

export const SignupRequest = (payload: SignupPayload): [boolean, SignupResponse[] | undefined, string, () => void, (action: SignupResponse[] | ((prevState: SignupResponse[]) => SignupResponse[])) => void] => {
    const [loading, data, error, request, setData] = useAxios<SignupResponse>({method: 'POST', url: "users/newUser", data: payload}, false)

    return [loading, data, error, request, setData]
}

interface LoginPayload {
    email: string,
    password: string
}

interface LoginResponse {
    message: string,
    success: boolean,
    userId: number,
    firstName: string,
    lastName: string
}

export const LoginRequest = (payload: LoginPayload): [boolean, LoginResponse[] | undefined, string, () => void, (action: LoginResponse[] | ((prevState: LoginResponse[]) => LoginResponse[])) => void] => {
    const [loading, data, error, request, setData] = useAxios<LoginResponse>({method: 'POST', url: "users/login", data: payload}, false)

    return [loading, data, error, request, setData]
}

interface AddNewGroupPayload {
    groupName: string,
    userId: number,
}

interface AddNewGroupResponse {
    message: string,
    success: boolean,
    groupId: number
}

export const AddNewGroupRequest = (payload: AddNewGroupPayload): [boolean, AddNewGroupResponse[] | undefined, string, () => void] => {
    const [loading, data, error, request] = useAxios<AddNewGroupResponse>({method: 'POST', url: "group/create", data: payload}, false)

    return [loading, data, error, request]
}

interface AddNewFriendResponse {
    message: string,
    success: boolean,
    userWithBalance: null
}

export const AddNewFriendRequest = (userId: any, friendEmail: any): [boolean, AddNewFriendResponse[] | undefined, string, () => void] => {
    const [loading, data, error, request] = useAxios<AddNewFriendResponse>({method: 'POST', url: `friends/sendRequest?userId=${userId}&friendEmail=${friendEmail}`}, false)

    return [loading, data, error, request]
}

export const AcceptFriendRequest = (requestId: any): [boolean, string[] | undefined, string, () => void] => {
    const [loading, data, error, request] = useAxios<string>({method: 'POST', url: `friends/acceptFriendRequest?requestId=${requestId}`}, false)

    return [loading, data, error, request]
}

export const DeclineFriendRequest = (requestId: any): [boolean, string[] | undefined, string, () => void] => {
    const [loading, data, error, request] = useAxios<string>({method: 'DELETE', url: `friends/declineRequest?requestId=${requestId}`}, false)

    return [loading, data, error, request]
}

interface AddNewGroupMemberPayload {
    userId: number
}

interface AddNewGroupMemberResponse {
    message: string,
    success: boolean,
    groupId: number
}

export const AddNewGroupMemberRequest = (groupId: any, payload: AddNewGroupMemberPayload): [boolean, AddNewGroupMemberResponse[] | undefined, string, () => void] => {
    const [loading, data, error, request] = useAxios<AddNewGroupMemberResponse>({method: 'POST', url: `group/${groupId}/addUser`, data: payload}, false)

    return [loading, data, error, request]
}

interface AddExpenseResponse {
    message: string,
    success: boolean,
    expenseId: number
}

export const AddExpenseRequest = (userId: any, payload: Expense): [boolean, AddExpenseResponse[] | undefined, string, () => void] => {
    const [loading, data, error, request] = useAxios<AddExpenseResponse>({method: 'POST', url: `expense/add-expense?payerId=${userId}`, data: payload}, false)

    return [loading, data, error, request]
}