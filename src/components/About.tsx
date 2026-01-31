import { ImageWithFallback } from "./ui/ImageWithFallback";

export function About() {
	return (
		<section id="about" className="py-20 px-4 bg-white">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-center mb-12">About Me</h2>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<ImageWithFallback
							src="https://images.unsplash.com/photo-1759884248009-92c5e957708e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Developer workspace"
							attribution={{
								photographer: "Sigmund",
								imageUrl:
									"https://unsplash.com/photos/man-in-a-baseball-cap-coding-on-laptops-9V-2P6Lq9b8",
								site: "Unsplash",
								siteUrl: "https://unsplash.com/",
							}}
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
							<a
								href="https://temmam.com"
								target="_blank"
								style={{ textDecoration: "underline" }}
							>
								Temmam Light
							</a>
							. Developing Temmam CRM, and contributed to{" "}
							<a
								href="https://RamiJabley.com"
								target="_blank"
								style={{ textDecoration: "underline" }}
							>
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
