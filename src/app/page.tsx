import ConstructionLogo from "./ui/ConstructionLogo";
import WaitList from "./ui/WaitList";

export default function Home() {
  return (
    <main className="w-full h-screen flex gap-10 flex-col justify-center items-center">
      <ConstructionLogo />
      <WaitList />
    </main>
  );
}
