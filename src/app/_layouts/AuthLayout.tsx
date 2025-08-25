import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // If not authenticated, redirect to /login
  if (!session) {
    redirect("/login");
  }

  // If authenticated and on /login, redirect to /dashboard
  if (typeof window === "undefined" && 
      (globalThis as any).location?.pathname === "/login" && session && session.user) {
    redirect("/dashboard");
  }

  return <HydrateClient>{children}</HydrateClient>;
}
