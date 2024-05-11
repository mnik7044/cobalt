import { Button } from "./ui/button";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  function handleClick() {
    // Clear the cookie
    Cookies.remove("id");
    Cookies.remove("email");
    Cookies.remove("avatar");
    Cookies.remove("name");
    router.push("/login");
  }
  return <Button onClick={handleClick}>Logout</Button>;
};

export default LogoutButton;
