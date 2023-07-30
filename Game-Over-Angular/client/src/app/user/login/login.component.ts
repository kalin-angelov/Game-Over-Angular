import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  error: string | undefined;

  constructor(private userService: UserService, private router: Router ) {}

  login( form: NgForm ):void {

    if (form.invalid) {
      return;
    }

    const data = {...form.value};

    if (form.valid) {
      this.userService.login(data).subscribe({
        next: (response) => this.userService.setUserInLs(response),
        error: ({ error }) => this.error = error.error,
        complete: () => this.router.navigate(['/profile'])
      });
    }
  }
}
