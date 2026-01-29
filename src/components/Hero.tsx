import { Github, Linkedin, Mail, Phone } from "lucide-react";
import WhatsappIcon from "./ui/whatsapp";

export function Hero() {
	return (
		<section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 via-blue-50 to-pink-50">
			<div className="max-w-4xl mx-auto text-center">
				{/* greeting */}
				<div className="mb-8">
					<div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
						<span className="text-6xl">👋</span>
					</div>
					<h1 className="mb-4">
						Hey there! I'm{" "}
						<span className="text-blue-600">Khalid Alshaibani</span>
					</h1>
					<p className="text-xl text-gray-600 mb-2">
						Transforming ideas into engaging digital experiences with clean,
						efficient code
					</p>
					<p className="text-gray-500 max-w-2xl mx-auto">
						Meticulous 3 Years Experienced Full-Stack Web Developer with a
						creative mind and logical problem-solving approach.
					</p>
				</div>

				{/* buttons */}
				<div className="flex gap-4 justify-center mb-8">
					<a
						href="#contact"
						className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
					>
						Let's Chat
					</a>
					{/* <a
						href="#projects"
						className="px-6 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-blue-50 transition-colors"
					>
						View My Work
					</a> */}
				</div>

				{/* social media icons */}
				<div className="flex gap-4 justify-center">
					<a
						href="https://github.com/KhalidAshaibani"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 hover:text-purple-600 transition-colors"
						aria-label="GitHub"
					>
						<Github className="w-6 h-6" />
					</a>
					<a
						href="https://linkedin.com/in/KhalidAshaibani"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 hover:text-purple-600 transition-colors"
						aria-label="LinkedIn"
					>
						<Linkedin className="w-6 h-6" />
					</a>
					<a
						href="KhalidAshaibani@gmail.com"
						className="p-2 hover:text-purple-600 transition-colors"
						aria-label="Email"
					>
						<Mail className="w-6 h-6" />
					</a>
					<a
						href="tel://+967735011120"
						className="p-2 hover:text-purple-600 transition-colors"
						aria-label="Phone"
					>
						<Phone className="w-6 h-6" />
					</a>
					<a
						href="https://wa.me/967735011120"
						target="_blank"
						className="p-2 hover:text-purple-600 transition-colors"
						aria-label="Phone"
					>
						<WhatsappIcon className="w-6 h-6" />
					</a>
				</div>
			</div>
		</section>
	);
}
