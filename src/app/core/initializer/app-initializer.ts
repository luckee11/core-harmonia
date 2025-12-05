import {inject} from "@angular/core";
import {LoginService} from "../../auth/sevices/login.service";

export function initializeAppConfig() {
  const loginService = inject(LoginService);
  return loginService.getUserInfo();
}
