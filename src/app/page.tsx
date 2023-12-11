import ConstructionLogo from "./ConstructionLogo";
import WaitList from "./Waitlist";

import "./page.scss";

export default function Home() {
	return (
		<main className="w-full h-screen flex gap-10 flex-col justify-center items-center">
			<div className="flex justify-center items-center foo w-500 h-400 rounded-2xl p-10">
				<ConstructionLogo/>
			</div>
			<WaitList />
		</main>
	);
}
