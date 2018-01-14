export class Account {
    username: string;
    password: string;
}
export class Register {
    name: string;
    contact: string;
    location: string;
    email: string;
    password: string;
}
export class Post {
	name: string;
	car: string;
	location: string;
    rating: string;
	feeling: string;
	content: string;
}
export class UserId{
    id: string;
}
export class Postcomment{
    id: string;
}
export class Comment {
    postid: string;
    userid: string;
    content: string;
}