import { Code2, Database, Rocket } from "lucide-react";

export function Skills() {
	const skillCategories = [
		{
			icon: Code2,
			title: "Frontend",
			skills: ["Vue.js", "React", "Svelte", "TypeScript", "Tailwind CSS"],
			color: "purple",
		},
		{
			icon: Database,
			title: "Backend",
			skills: ["Node.js", "Adonis.js", "Express.js", "Laravel", "REST APIs"],
			color: "blue",
		},
		{
			icon: Rocket,
			title: "Tools & More",
			skills: ["Git", "Agile", "Server Management", "Hosting", "Linux"],
			color: "green",
		},
	];

	const colorClasses = {
		purple: {
			bg: "bg-purple-50",
			icon: "text-purple-600",
			badge: "bg-purple-100 text-purple-700",
		},
		blue: {
			bg: "bg-blue-50",
			icon: "text-blue-600",
			badge: "bg-blue-100 text-blue-700",
		},
		pink: {
			bg: "bg-pink-50",
			icon: "text-pink-600",
			badge: "bg-pink-100 text-pink-700",
		},
		green: {
			bg: "bg-green-50",
			icon: "text-green-600",
			badge: "bg-green-100 text-green-700",
		},
	};

	return (
		<section id="skills" className="py-20 px-4 bg-gray-50">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-center mb-4">Skills & Tech Stack</h2>
				<p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
					Here's what I work with. Always learning, always growing.
				</p>

				<div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
					{skillCategories.map((category) => {
						const Icon = category.icon;
						const colors =
							colorClasses[category.color as keyof typeof colorClasses];

						return (
							<div
								key={category.title}
								className={`${colors.bg} p-6 rounded-xl`}
							>
								<div className={`${colors.icon} mb-4`}>
									<Icon className="w-8 h-8" />
								</div>
								<h3 className="mb-4">{category.title}</h3>
								<div className="flex flex-wrap gap-2">
									{category.skills.map((skill) => (
										<span
											key={skill}
											className={`px-3 py-1 ${colors.badge} rounded-full`}
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
