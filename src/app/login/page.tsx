"use client";

// import { login } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppToast } from "@/lib/toast";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const session = useSession();
  const { replace, refresh } = useRouter();

  useEffect(() => {
    if (session?.data?.user?.email) {
      replace("/");
    }
  }, [session, replace]);

  const [data, setData] = useState({ email: "", password: "" });
  const [Loading, setLoading] = useState(false);
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    // const res = await login(data);
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/dashboard",
        redirect: false,
      });
      if (res?.ok) {
        AppToast({ message: "Login successful." });
        // replace("/dashboard");
        window.location.href = "/dashboard";
      } else {
        AppToast({ message: "Login failed. Try later." });
      }
    } catch (err) {
      AppToast({ message: "Login failed. Try later." });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-[500px] mx-auto px-4 mt-10 mb-20">
      <h3 className="text-center ">Login</h3>
      <form className="space-y-5 mt-10" onSubmit={handleLogin}>
        <Input
          placeholder="Email"
          autoComplete="current-password"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <Input
          placeholder="Password"
          autoComplete="current-password"
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <Button type="submit" className="w-full h-10" loading={Loading}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
