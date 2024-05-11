"use client";
// Popup Window Code
// After successful login in your popup window, send JSON data to the parent window
// For example, after successful login, you might have something like this in your popup window code:
// window.opener.postMessage({ status: "success", userData: { /* your user data here */ } }, "http://localhost:3000");

// Parent Window Code
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
export default function LoginPage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const id = Cookies.get("id") ?? null;
    const email = Cookies.get("email") ?? null;
    if (id && email) {
      router.push("/profile");
    }
  }, []);
  const handleClick = () => {
    const url = "http://localhost:5000/auth/google";
    router.replace(url);
  };

  return (
    <div className="w-full lg:grid min-h-screen   bg-black text-white">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              You can login with your Google account
            </p>
          </div>
          <Button type="button" onClick={handleClick} className="w-full">
            Login With Google
          </Button>
        </div>
      </div>

      {userData && (
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h2 className="text-2xl font-bold">User Data</h2>
              <pre>{JSON.stringify(userData, null, 2)}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
