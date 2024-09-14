export default function Informational() {
	return (
		// for the section background behind the cards
		<div className="relative w-full h-auto flex lg:px-5 px-0 bg-purple-200">
			{/* for the spacing of the top card */}
			<div className="w-full flex flex-col items-center mt-0 mb-0 lg:mt-[-65px] lg:mb-[-65px]">
				{/* for the content of the card */}
				<div className="w-full lg:h-[797px] max-w-[1360px] bg-white lg:shadow-xl lg:rounded-lg px-12 py-8 text-center space-y-10">
					<h1 className="text-4xl pt-3">
						Welcome to the <b>Pisacano Foundation</b>
					</h1>
					<p className="text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
						libero ac elit imperdiet suscipit nec elementum tortor. Cras
						suscipit, ligula et sollicitudin tincidunt, ante eros scelerisque
						augue, in egestas mi orci a est. Nullam convallis justo a sodales
						pellentesque. Nulla id suscipit nibh. Duis vitae lacus mauris. Sed
						justo augue, convallis eu arcu at, scelerisque tempus lectus. Ut
						nisi odio, pretium vel facilisis quis, pellentesque non ligula.
						Nullam consequat vel justo quis ultricies. Morbi aliquet justo nisl.
						Praesent laoreet facilisis finibus.
					</p>
				</div>
			</div>
		</div>
	);
}
