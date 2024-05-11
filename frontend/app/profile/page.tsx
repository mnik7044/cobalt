"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/hooks/useCookie";
import LogoutButton from "@/components/LogoutButton";

const ProfileCard = () => { // Profile Page
  const { id, email, avatar, name } = useUser();

  return ( // Display User Data
    <div className="h-screen bg-black flex flex-col  items-center pt-20 ">
      <div className="mb-10">
        <LogoutButton />
      </div>
      <Card className="max-w-lg bg-slate-400 border border-black text-white p-20">
        <CardContent className="flex flex-col gap-5 justify-center items-center">
          <Avatar className="w-20 h-20">
            <AvatarImage src={avatar || ""} className="w-full h-full" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <section className="font-bold text-center space-y-4">
            <div className="text-4xl">{name}</div>
            <div>{email}</div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard; // Export ProfileCard
