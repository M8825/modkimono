import ConstructionLogo from "./ConstructionLogo";
import "./page.scss";

export default function Home() {
	return (
		<main className="w-full h-screen flex gap-10 flex-col justify-center items-center">
			<div className="flex justify-center items-center foo w-500 h-400 rounded-2xl p-10">
				<ConstructionLogo />
			</div>

			<div className="flex flex-col gap-3">
				<div className="w-500 flex flex-col gap-1">
					<p className="text-mk-color-light-gray font-open-sans">
						It`s on the way
					</p>
					<p className="text-mk-color-dark-gray font-open-sans text-xs">
						Sign up to be the first to know when it launches.
					</p>
				</div>
				<div className="w-500 flex flex-row hover:ring-1 hover:ring-zinc-700 rounded-md ">
					<input
						type="text"
						className="
						w-full
					 placeholder-zinc-700
					rounded-tl-md
					 rounded-bl-md
					 p-4 bg-gradient-to-r
					 from-neutral-900
					 to-neutral-900
					 focus:outline-none"
						placeholder="email"
					/>
					<button className="bg-zinc-800 rounded-tr-md rounded-br-md p-4 text-mk-color-dark-gray hover:text-mk-color-light-gray font-open-sans text-xs">
						Submit
					</button>
				</div>
			</div>
		</main>
	);
}
