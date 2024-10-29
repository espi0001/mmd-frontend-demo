import Button from "@/components/Button";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";

export default function Home() {
  return (
    <div className="rounded-2xl bg-black text-white p-5 max-w-56">
      <div className="flex justify-between">
        <LiaCookieBiteSolid className="h-10 w-10 stroke-white fill-white" />
        <IoIosClose className="h-5 w-5 cursor-pointer" />
      </div>

      <p className="mt-10 max-w-36">We use cookies to improve your user experience.</p>
      <Button />
    </div>
  );
}
