export class User {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;

    constructor(
        email: string,
        password: string,
        firstName?: string,
        lastName?: string
    ) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}