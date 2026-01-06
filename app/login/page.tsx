"use client";
import { Button } from "@/components/ui/button";
import { FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (name !== "admin" || password !== "1234") {
        console.error("Crediential does not match");
        return;
      }
      await fetch("/api/login");
      router.push("/dashboard");
    } catch (error) {
      console.error("something went wrong", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FieldGroup>
      <FieldSeparator className="h-6" />
      <FieldGroup>
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <Input
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FieldGroup>
      <Button className="w-full mt-6 py-6">Login</Button>
    </form>
  );
}
