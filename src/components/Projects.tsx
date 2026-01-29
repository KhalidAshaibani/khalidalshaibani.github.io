import { ImageWithFallback } from "./ui/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
	const projects = [
		{
			title: "E-Commerce Dashboard",
			description:
				"A full-featured admin dashboard for managing products, orders, and customers. Built with React and Node.js.",
			image:
				"https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTczOTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
			tags: ["React", "Node.js", "MongoDB", "Tailwind"],
			liveUrl: "#",
			githubUrl: "#",
		},
		{
			title: "Design Portfolio Site",
			description:
				"A sleek portfolio website for a UI/UX designer with smooth animations and an interactive project showcase.",
			image:
				"https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc2MTczMTg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
			tags: ["Next.js", "Framer Motion", "TypeScript"],
			liveUrl: "#",
			githubUrl: "#",
		},
		{
			title: "Task Management App",
			description:
				"A mobile-first task manager with drag-and-drop, real-time updates, and team collaboration features.",
			image:
				"https://images.unsplash.com/photo-1730818875087-182c15e1e7a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW58ZW58MXx8fHwxNzYxNzM3NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
			tags: ["React", "Firebase", "PWA", "DnD"],
			liveUrl: "#",
			githubUrl: "#",
		},
	];

	return (
		<section id="projects" className="py-20 px-4 bg-white">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-center mb-4">Recent Projects</h2>
				<p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
					Some of my favorite things I've built. Each one taught me something
					new.
				</p>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.title}
							className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
						>
							<div className="relative h-48 overflow-hidden">
								<ImageWithFallback
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
								/>
							</div>

							<div className="p-6">
								<h3 className="mb-2">{project.title}</h3>
								<p className="text-gray-600 mb-4">{project.description}</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
										>
											{tag}
										</span>
									))}
								</div>

								<div className="flex gap-4">
									<a
										href={project.liveUrl}
										className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
									>
										<ExternalLink className="w-4 h-4" />
										Live Demo
									</a>
									<a
										href={project.githubUrl}
										className="flex items-center gap-2 text-gray-600 hover:text-gray-700"
									>
										<Github className="w-4 h-4" />
										Code
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
