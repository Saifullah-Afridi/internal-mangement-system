"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LogOutpage() {
  const router = useRouter();
  const handleLogout = () => {
    fetch("/api/logout");
    router.push("/login");
  };
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
