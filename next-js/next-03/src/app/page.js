"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  // console.log("router", router);
  return (
    <>
      <div className="flex  gap-16">
        <p>
          <Link href={`/admin`}>Admin</Link>
        </p>
        <p>
          <Link href={`/admin/login`}>Login</Link>
        </p>
        <p>
          <Link href={`/admin/signup`}>Signup</Link>
        </p>
        <p>
          <Link href={`/admin/superadmin`}>Super Admin Dashboard</Link>
        </p>

        <button
          className="border border-red-300 rounded p-1 ml-4 cursor-pointer"
          onClick={() => router.push("/products")}
        >
          Products
        </button>
      </div>
    </>
  );
}
