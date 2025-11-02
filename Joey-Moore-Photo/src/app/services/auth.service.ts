import { Injectable, signal } from "@angular/core";
import { Auth, onAuthStateChanged, signOut, User } from "@angular/fire/auth";

@Injectable({providedIn: 'root'})
export class AuthService {
    user = signal<User | null>(null);

    constructor(private auth: Auth){
        onAuthStateChanged(this.auth, (user) => {
            this.user.set(user);
        });
    }
    logout(){
        return signOut(this.auth);
    }

    isLoggedIn(): boolean {
        return !!this.user();
    }
}
