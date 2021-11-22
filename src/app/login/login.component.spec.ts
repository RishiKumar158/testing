import { AuthService } from "../services/auth.service";
import { LoginComponent } from "./login.component";

// class MockAuthService extends AuthService {
//   authenticated: boolean = false;

//   override isAuthenticated() {
//     return this.authenticated;
//   }
// } ?? mock Service


describe('Login Component', () => {
  let component: LoginComponent;
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    localStorage.removeItem('token');
  });

  it('needsLogin return true when the user has not yet been authenticated', () => {
    spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(component?.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

  it('needsLogin return false when the user has been authenticated', () => {
    spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component?.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
});