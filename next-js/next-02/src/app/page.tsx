import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

// import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  // const router = useRouter();

  return (
    <>
      <div className="">
        Shadcn example
        <Button variant="blue" size="lg">
          <Link href={"/products"}>Product </Link>
        </Button>
        <Button variant="blue" size="lg">
          Product
        </Button>
        <Input type="text" />
        <button
          className="border border-red-300 rounded p-1 ml-4
        "
        >
          Normal Button
        </button>
        <Image
          src="https://i.imgur.com/0WURSdz.jpeg"
          alt="image"
          width={200}
          height={200}
          loading="lazy"
        />
        <div className=""></div>
      </div>
    </>
  );
}
