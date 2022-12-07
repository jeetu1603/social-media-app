**auth Route**
| Endpoint | Method | Description |
|--------------------|--------|---------------|
| /api/auth/register | POST | create a user |
| /api/auth/login | POST | login a user |

**users Route**
| Endpoint | Method | Description |
|------------------------------------------------|--------|----------------------|
| /api/users/:userId | PUT | update a user |
| /api/users/:userId | DELETE | delete a user |
| /api/users?userId=[]<br>/api/users?username=[] | GET | get a user |
| /api/users/friends/:userId | GET | get a user's friends |
| /api/users/:userId/follow | PUT | follow a user |
| /api/users/:userId/unfollow | PUT | unfollow a user |

**posts Route**
| Endpoint | Method | Description |
|------------------------------|--------|-----------------------------|
| /api/posts/ | POST | create a post |
| /api/posts/:postId | PUT | update a post |
| /api/posts/:postId | DELETE | delete a post |
| /api/posts/:postId/like | PUT | like/dislike a post |
| /api/posts/:postId | GET | get a single post |
| /api/posts/timeline/:userId | GET | get a user's timeline posts |
| /api/posts/profile/:username | GET | get a user's posts |
