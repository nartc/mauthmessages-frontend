import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
        public fB: FormBuilder
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
    
    onSignInSubmit() {
        console.log(this.signInForm);
        this.signInForm.reset();
    }
}