import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  error: string | undefined

  constructor(private userService: UserService, private router: Router) {}

  register( form: NgForm): void {
    if (form.invalid) {
      return
    }
    
    const data = {...form.value};

    if (form.valid) {
      if (form.value.password == form.value.rePassword) {
        this.userService.register(data).subscribe({
          next: (response) => this.userService.setUserInLs(response),
          error: ({ error }) => {
            this.error = error.message;
            setTimeout(() => {
              this.error = undefined;
            },3000)
          },
          complete: () => this.router.navigate(['/profile'])
        })
      } else {
        this.error = 'Password don\'t match!'
        setTimeout(() => {
          this.error = undefined;
        },3000)
      }
    } else {
      return
    }
      
    
      
  }
}
