import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserData() {
    return { name: 'Usuário de Exemplo', email: 'exemplo@email.com' };
  }
}
