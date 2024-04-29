import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

export default function Home() {
  const session = getServerSession(options);

  return <>{session ? <div>Hello user!</div> : <div>Please login</div>}</>;
}
