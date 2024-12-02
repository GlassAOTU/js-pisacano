export default function TopHero() {
	return (
		// background color and size
		<div className="bg-gradient-to-br from-blue-400 to-purple-500 h-auto">
			{/* text area */}
			<div className="max-w-[85rem] mx-auto lg:px-24 sm:px-16 px-4 lg:py-20 md:pt-16 py-10 space-y-6">
				{/* Title */}
				<div className="max-w-xl mx-auto md:mx-0">
					<p className="block font-black md:text-start text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]">
						CREATING A WORLD
					</p>
				</div>
				{/* End Title */}

				{/* Subtitle */}
				<div className="max-w-[32rem] mx-auto md:mx-0">
					<p className="text-white text-xl md:text-start text-center sm:text-2xl md:text-3xl lg:text-5xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.4)]">
						WHERE EVERY CHILD HAS THE OPPORTUNITY TO SUCCEED
					</p>
				</div>
				{/* End Subtitle */}
			</div>
			{/* end text area */}
		</div>
	);
}
