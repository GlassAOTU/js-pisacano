// export default function TopHero() {
// 	return (
// 		// background image and size
// 		<div className="z-2 bg-cover bg-center h-auto" style={{backgroundImage: "url('/images/splash.jpg')"}}>
// 			{/* overlay */}
// 			<div className="bg-gray-900 opacity-50 blur-sm h-full"></div>
// 			{/* text area */}
// 			<div className="max-w-[85rem] mx-auto lg:px-24 sm:px-16 px-4 lg:py-20 md:pt-16 py-10 space-y-6">
// 				{/* Title */}
// 				<div className="max-w-xl mx-auto md:mx-0 z-20">
// 					<p className="block font-black md:text-start text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]">
// 						CREATING A WORLD
// 					</p>
// 				</div>
// 				{/* End Title */}

// 				{/* Subtitle */}
// 				<div className="max-w-[32rem] mx-auto md:mx-0 z-20">
// 					<p className="text-white text-xl md:text-start text-center sm:text-2xl md:text-3xl lg:text-5xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.4)]">
// 						WHERE EVERY CHILD HAS THE OPPORTUNITY TO SUCCEED
// 					</p>
// 				</div>
// 				{/* End Subtitle */}
// 			</div>
// 			{/* end text area */}
// 		</div>
// 	);
// }


export default function TopHero() {
	return (
		<div className="relative md:pb-16">
			{/* Background Image with Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage: "url('/images/splash.jpg')",
				}}
			>
				{/* Overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-orange-300/60 to-red-700/60"></div>
			</div>

			{/* Text Area */}
			<div className="relative z-10 max-w-[85rem] mx-auto lg:px-24 sm:px-16 px-4 lg:py-20 md:pt-16 py-10 space-y-6">
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
		</div>
	);
}
