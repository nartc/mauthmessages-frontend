import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styles: [`
        span.input-group-addon{
            color: #37b278;
        }
    `]
})

export class SigninComponent {
    public signInForm: FormGroup;
    public emailRegex: string = "[^ @]*@[^ @]*";
    
    constructor(
        public fB: FormBuilder,
        public authService: AuthService
    ) {

    }

    ngOnInit() {
        this.signInForm = this.fB.group({
            email: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.pattern(this.emailRegex)
            ])),
            password: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ]))
        });
    }
    
    onSignInSubmit(value) {
        let credentials = {
            email: value.email,
            password: value.password
        }
        this.authService.signIn(credentials)
            .subscribe(
                (data: any): void =>{
                    console.log('Data coming back from sign-in...', data);
                }
            );
        this.signInForm.reset();
    }
}