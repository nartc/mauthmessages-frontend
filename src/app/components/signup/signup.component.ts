import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { PasswordValidation } from './password-validation';
import { SweetAlertService } from 'angular-sweetalert-service/js';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styles: [`
        span.input-group-addon{
            color: #37b278;
        }

        #submitBtn:disabled{
            cursor: not-allowed;
        }
                
        #submitBtn{
            cursor: pointer;
        }
    `]
})

export class SignupComponent implements OnInit {
    public newUser: User;
    public signUpForm: FormGroup;
    public emailRegex: string = "[^ @]*@[^ @]*";
    
    constructor(
        public fB: FormBuilder,
        public authService: AuthService,
        public alertService: SweetAlertService,
        public router: Router
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
                        this.signUpForm.reset();
                        this.alertService.confirm({
                            title: data.message,
                            text: 'Congrats! You are able to sign in now',
                            type: 'success',
                            confirmButtonText: 'Go to sign in',
                            showCancelButton: true
                        })
                        .then(
                            () => {
                                this.router.navigate(['/auth/signin']);
                            }
                        );
                    } else {
                        console.log('Error adding new user', data.err);
                        this.alertService.alert({
                            title: data.err.name,
                            text: `${data.err.errors.email.message} is already existed`,
                            type: 'warning'
                        });
                    }
                },
                (err: any) => {
                    console.log('Error', err);
                }
            );

        
    }
}