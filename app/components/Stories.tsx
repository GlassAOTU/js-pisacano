export default function Stories() {
	return (
		<div className='flex justify-center bg-[#fb4d3d]'>
			<div
				data-hs-carousel='{
  "loadingclassNamees": "opacity-0"
}'
				className='relative xl:w-2/3 lg:w-3/4 w-11/12'
			>
				{/* removed rounded corners from style below -- 'rounded-lg'  */}
				<div className='hs-carousel relative overflow-hidden w-full min-h-[500px]'>
					<div className='hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0'>
						{/* slide 1 */}
						<div className='hs-carousel-slide'>
							<div className='flex justify-center h-full p-6'>
								<span className='self-center lg:text-6xl md:text-5xl text-4xl transition duration-700 text-white font-extrabold'>
									Story 1
								</span>
							</div>
						</div>
						{/* slide 2 */}
						<div className='hs-carousel-slide'>
							<div className='flex justify-center h-full p-6'>
								<span className='self-center lg:text-6xl md:text-5xl text-4xl transition duration-700 text-white font-extrabold'>
									Story 2
								</span>
							</div>
						</div>
						{/* slide 3 */}
						<div className='hs-carousel-slide'>
							<div className='flex justify-center h-full p-6'>
								<span className='self-center lg:text-6xl md:text-5xl text-4xl transition duration-700 text-white font-extrabold'>
									Story 3
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* left arrow button */}
				<button
					type='button'
					className='hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-white opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-100' // removed background hover -- 'hover:bg-gray-800/[.1]'
				>
					<span className='text-2xl' aria-hidden='true'>
						<svg
							className='w-20 h-20' // to edit arrow size
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							viewBox='0 0 16 16'
						>
							<title>left button</title>
							<path
								fillRule='evenodd'
								d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
							/>
						</svg>
					</span>
					<span className='sr-only'>Previous</span>
				</button>
				{/* end left arrow button */}

				{/* right arrow button */}
				<button
					type='button'
					className='hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-white opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-100' // removed background hover -- 'hover:bg-gray-800/[.1]'
				>
					<span className='sr-only'>Next</span>
					<span className='text-2xl' aria-hidden='true'>
						<svg
							className='w-20 h-20' // to edit arrow size
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							viewBox='0 0 16 16'
						>
							<title>right button</title>
							<path
								fillRule='evenodd'
								d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
							/>
						</svg>
					</span>
				</button>
				{/* end right arrow button */}
			</div>
		</div>
	)
}
