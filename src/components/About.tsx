import { ImageWithFallback } from "./ui/ImageWithFallback";

export function About() {
	return (
		<section id="about" className="py-20 px-4 bg-white">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-center mb-12">About Me</h2>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<ImageWithFallback
							src="https://images.unsplash.com/photo-1759884248009-92c5e957708e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzYxNjgwMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
							alt="Developer workspace"
							className="rounded-2xl shadow-lg w-full h-auto"
						/>
					</div>

					<div>
						<p className="text-gray-600 mb-6">
							Meticulous 3 Years Experienced Full-Stack Web Developer with a
							creative mind and logical problem-solving approach.
						</p>
						<p className="text-gray-600 mb-6">
							Experienced in Laravel, AdonisJS, Express for backend, Vue, React,
							and Tailwindcss for frontend, MySQL for database.
						</p>
						<p className="text-gray-600 mb-6">
							Currently working as Lead Full-Stack Developer at{" "}
							<a href="https://temmam.com" target="_blank">
								Temmam Light
							</a>
							. Developing Temmam CRM, and contributed to{" "}
							<a href="https://RamiJabley.com" target="_blank">
								RamiJabley.com
							</a>
							.
						</p>

						{/* <div className="flex flex-wrap gap-3 mt-8">
							<span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
								🎮 Gaming
							</span>
							<span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
								☕ Coffee Addict
							</span>
							<span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full">
								🎨 UI/UX Nerd
							</span>
							<span className="px-4 py-2 bg-green-100 text-green-700 rounded-full">
								🚀 Space Enthusiast
							</span>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
}
