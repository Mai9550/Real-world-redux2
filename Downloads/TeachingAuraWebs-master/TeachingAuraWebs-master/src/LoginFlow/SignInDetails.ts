import { getAuth } from "firebase/auth";
import { makeAutoObservable } from "mobx";

export class SignInDetails {
  public id: String | null;
  public isSignedIn: Boolean;
  public isLoaded: Boolean;
  public token: String | null;
  public role: String = "admin";

  constructor() {
    makeAutoObservable(this);
    const auth = getAuth();

    setTimeout(() => {
      if (this.isLoaded && this.id != null) {
        getAuth()
          .currentUser?.getIdToken()
          .then((token) => {
            this.updateRole(localStorage.getItem('role'));
            this.token = token;
          });
      }
    }, 120000);

    auth.onAuthStateChanged((user) => {
      this.updateState(user?.uid);
    });
  }

  updateRole = (newRole) => {
    this.role = newRole;
  };

  getRole = () => {
    return this.role;
  };

  SignOut = () => {
    return getAuth().signOut();
  };

  async updateState(user: string | undefined) {
    this.updateRole(localStorage.getItem('role'));
    if (user) {
      this.id = user;
      this.token = await getAuth().currentUser?.getIdToken()!;
      // TODO: remove this once we create institute
      //this.id = "2010"
      this.isSignedIn = true;
      console.log("uid => " + this.id + "\n islogged in => " + this.isSignedIn);
    } else {
      this.isSignedIn = false;
      this.id = null;
    }
    this.isLoaded = true;
    console.log("Updated Role is : " + this.role);
  }
}
