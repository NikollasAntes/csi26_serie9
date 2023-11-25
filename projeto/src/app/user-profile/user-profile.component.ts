import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  template: `
    <div>
      <h2>Perfil do Usuário</h2>
      <p>Nome: {{ userData.name }}</p>
      <p>Email: {{ userData.email }}</p>
    </div>
  `,
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userData: { name: string; email: string } | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userData = this.userService.getUserData();
  }
}
