import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { PasswordValidation } from './password-validation';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styles: [`
        span.input-group-addon{
            color: #37b278;
        }
    `]
})

export class SignupComponent implements OnInit {
    public newUser: User;
    public signUpForm: FormGroup;
    public emailRegex: string = "[^ @]*@[^ @]*";
    
    constructor(
        public fB: FormBuilder,
        public authService: AuthService
    ) {

    }

    ngOnInit() {
        this.signUpForm = this.fB.group({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.pattern(this.emailRegex)
            ])),
            password: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ])),
            verifyPassword: new FormControl(null, Validators.required)
        }, { validator: PasswordValidation.MatchPassword });
    }
    
    onSignUpSubmit(value) {
        this.newUser = {
            email: value.email,
            password: value.password,
            firstName: value.firstName,
            lastName: value.lastName
        }

        this.authService.addUser(this.newUser)
            .subscribe(
                (data: any) => {
                    if(data.success) {
                        console.log('New user added', data.user);
                    } else {
                        console.log('Error adding new user', data.err.message);
                    }
                },
                (err: any) => {
                    console.log('Error', err);
                }
            );

        this.signUpForm.reset();
    }
}