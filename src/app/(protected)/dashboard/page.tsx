import Link from "next/link";
import { auth } from "~/server/auth";

export default async function Dashboard() {

  
  const session = await auth();
 

  return (
     <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Welcome <span className="text-[hsl(280,100%,70%)]">{session?.user?.name}</span>
          </h1>
           <h2 className="text-5xl font-extrabold tracking-tight sm:text-[3.5rem]">
            Dash<span className="text-[hsl(280,100%,70%)]">board</span>
          </h2>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center justify-center gap-4">              
              <Link
                href={"/api/auth/signout"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                Sign out
              </Link>
            </div>
          </div>
         
        </div>
      </main>   
  )
}