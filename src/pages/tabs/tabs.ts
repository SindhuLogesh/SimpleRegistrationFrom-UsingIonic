import { Component } from '@angular/core';

import { UserListPage } from '../userlist/userlist';
import { RegisterPage } from '../register/register';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RegisterPage;
  tab2Root = UserListPage;

  constructor() {

  }
}
