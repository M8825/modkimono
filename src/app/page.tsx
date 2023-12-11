import ConstructionLogo from "./ConstructionLogo";
import WaitList from "./WaitList";

import "./page.scss";

export default function Home() {
  return (
    <main className="w-full h-screen flex gap-10 flex-col justify-center items-center">
      <ConstructionLogo />
      <WaitList />
    </main>
  );
}
