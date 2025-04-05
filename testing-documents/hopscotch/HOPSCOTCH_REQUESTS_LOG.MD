# Hopscotch Requests Log
---

## Group Requests

### Check Users in Group

**Type:** GET

**Request Endpoint:**

```
http://localhost:8080/group/{groupID}/{userId}/users
```

**Body:** [empty]

**Content-type:** [empty]

**Parameters:** [empty]

**Response Format:**



```
[
  {
    "balance": 25.0,
    "userId": 5,
    "firstName": "Heather",
    "lastName": "Russell",
    "email": "Heather@gmail.com",
    "username": "HeatherR",
    "passwordHash": null,
    "password": "password789"
  },
  {
    "balance": 200.0,
    "userId": 1,
    "firstName": "Charu",
    "lastName": "Srivastava",
    "email": "Charu@email.com",
    "username": "charu_s",
    "passwordHash": null,
    "password": "password1"
  }
]

```

### Add User to Group

**Type:** POST

**Request Endpoint:**

```
http://localhost:8080/group/2/addUser
```

**Body:** 
```
1 //this should change to a request body 
```

**Content-type:** application/json


**Parameters:** [empty]

**Response Format:**

```
"User successfully added to group" 
```

### Create a Group

**Type:** POST

**Request Endpoint:**

```
http://localhost:8080/group/create
```

**Body:** 
```
{
  "groupName": "Test Group",
  "userId": 1
}
```

**Content-type:** application/json


**Parameters:** [empty]

**Response Format:**

```
"Group successfully created!" 
```

---

## User Requests

### Login

**Type:** POST

**Request Endpoint:**

```
http://localhost:8080/users/login
```

**Body:** 
```
{
  "email": "alice@email.com",
  "password": "password1"
}
```

**Content-type:** application/json


**Parameters:** [empty]

**Response Format:**

```
"User Login Successful" 
```

---














## License

[MIT](https://choosealicense.com/licenses/mit/)
