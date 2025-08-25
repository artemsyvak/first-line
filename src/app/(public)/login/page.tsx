import Link from "next/link";

export default async function Login() { 

  return (   
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            First <span className="text-[hsl(280,100%,70%)]">Line</span>
          </h1>
           <h2 className="text-5xl font-extrabold tracking-tight sm:text-[3.5rem]">
            Log <span className="text-[hsl(280,100%,70%)]">in</span>
          </h2>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center justify-center gap-4">              
              <Link
                href={"/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                Sign in
              </Link>
            </div>
          </div>
         
        </div>
      </main>   
  );
}
