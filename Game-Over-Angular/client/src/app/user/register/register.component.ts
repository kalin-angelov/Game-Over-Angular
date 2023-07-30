import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  error: string | undefined

  constructor(private userService: UserService, private router: Router) {}

  register( form: NgForm): void {
    // if (form.invalid) {
    //   return
    // }
    
    const data = {...form.value};

    if (form.valid && (form.value.password == form.value.rePassword)) {

      this.userService.register(data).subscribe({
        next: (response) => this.userService.setUserInLs(response),
        error: ({ error }) => this.error = error.error,
        complete: () => this.router.navigate(['/profile'])
      })
    } else {
      return
    }
  }
}
