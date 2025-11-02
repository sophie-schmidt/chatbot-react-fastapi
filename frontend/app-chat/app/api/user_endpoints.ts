import { UserEntity } from "@lib/UserEntity";

/*  Fetches the user information (stub implementation) */
export function fetchUser(): UserEntity { 
    return {  
        first_name: "Alain",
        last_name: "Dupont",
        avatar: "https://cdn-icons-png.flaticon.com/512/17932/17932534.png"
    };  
}
