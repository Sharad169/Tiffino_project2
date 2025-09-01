import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-sign-in',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './user-sign-in.component.html',
  styleUrl: './user-sign-in.component.css'
})
export class UserSignInComponent {

}
