import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface User {
  id: string | null;
  email: string | null;
  avatar: string | null;
  name: string | null;
}

export const useUser = (): User => {
  const [user, setUser] = useState<User>({
    id: null,
    email: null,
    avatar: null,
    name: null,
  });
  const router = useRouter();

  useEffect(() => {
    const fetchUserFromCookies = () => {
      const id = Cookies.get("id") ?? null;
      const email = Cookies.get("email") ?? null;
      const avatar = Cookies.get("avatar") ?? null;
      const name = Cookies.get("name") ?? null;

      if (!id || !email) {
        // Check for essential fields
        router.push("/login");
      } else {
        setUser({ id, email, avatar, name });
      }
    };

    fetchUserFromCookies();
  }, [router]); // include router in the dependency array

  return user;
};
