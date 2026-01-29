import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// This would normally send to a backend
		alert("Thanks for reaching out!");
		setFormData({ name: "", email: "", message: "" });
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section
			id="contact"
			className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"
		>
			<div className="max-w-4xl mx-auto">
				<h2 className="text-center mb-4">Let's Work Together!</h2>
				<p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
					Got a project in mind? Want to collaborate? Or just want to chat about
					code? Drop me a line!
				</p>

				<div className="grid md:grid-cols-2 gap-12">
					<div>
						<div className="mb-8">
							<div className="flex items-start gap-4 mb-6">
								<div className="p-3 bg-purple-100 rounded-lg">
									<Mail className="w-6 h-6 text-purple-600" />
								</div>
								<div>
									<h3 className="mb-1">Email Me</h3>
									<a
										href="mailto://KhalidAshaibani@gmail.com"
										className="text-gray-600"
									>
										KhalidAshaibani@gmail.com
									</a>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="p-3 bg-blue-100 rounded-lg">
									<MessageSquare className="w-6 h-6 text-blue-600" />
								</div>
								<div>
									<h3 className="mb-1">Let's Connect</h3>
									<p className="text-gray-600">
										I'm always open to interesting conversations and
										opportunities. Response time is usually within 48 hours!
									</p>
								</div>
							</div>
						</div>

						<div className="bg-purple-100 p-6 rounded-xl">
							<p className="text-purple-900">
								💡 <strong>Pro tip:</strong> Include details about your project,
								timeline, and budget in your message. The more I know, the
								better I can help!
							</p>
						</div>
					</div>

					<div className="bg-white p-8 rounded-xl shadow-lg">
						<form onSubmit={handleSubmit}>
							<div className="mb-4">
								<label htmlFor="name" className="block text-gray-700 mb-2">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
									placeholder="Your name"
								/>
							</div>

							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
									placeholder="your.email@example.com"
								/>
							</div>

							<div className="mb-6">
								<label htmlFor="message" className="block text-gray-700 mb-2">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={4}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none resize-none"
									placeholder="Tell me about your project..."
								/>
							</div>

							<button
								type="submit"
								className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
							>
								<Send className="w-4 h-4" />
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
