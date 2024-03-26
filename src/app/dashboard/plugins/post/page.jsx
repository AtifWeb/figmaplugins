import { Aside } from "@/components/dashboard/Aside";
import { PostPlugin } from "@/components/dashboard/PostPlugin";

export default function post() {
  return (
    <div className="bg-[#FAFAFA] flex">
      <Aside />
      <PostPlugin />
    </div>
  );
}
