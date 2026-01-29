import { Heart, Coffee } from "lucide-react";

export function Footer() {
	return (
		<footer className="py-8 px-4 bg-gray-900 text-white">
			<div className="max-w-6xl mx-auto text-center">
				<p className="flex items-center justify-center gap-2 mb-2">
					Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by
					Khalid Alshaibani
				</p>
				<p className="text-gray-400">
					© {new Date().getFullYear()} All rights reserved.
				</p>
			</div>
		</footer>
	);
}
