"use client";
import { montserrat } from "@/public/fonts/fonts";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import me from "@/public/images/me.png";
import moviesApp from "@/public/images/movies-app.png";
import jumiaClone from "@/public/images/jumia-clone.png";
import portfolio from "@/public/images/portfolio.png";
import pongGame from "@/public/images/pong-game.gif";
import { skills } from "@/public/data/skills";
import contactMe from "@/public/images/contact.jpeg";
import Cube from "@/app/components/Cube";
import Header from "@/app/components/Header";

export default function Home() {
	const [state, setState] = useState<boolean>(false);
	const nameTypewriter = useRef<HTMLDivElement>(null);


	const [text, helper] = useTypewriter({
		words: ["I'm", "Ahmed", "Badran", `I'm Ahmed Mohamed Badran`],
		typeSpeed: 100,
		deleteSpeed: 80,
	});

	const { isDone } = helper;
	if (isDone && nameTypewriter.current) {
		setTimeout(() => {
			nameTypewriter.current?.remove();
			setState(true);
		}, 1000 * 4)
	}


	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);


	return (
		<>
			<header className="p-3 md:p-6 h-screen">
				{/* Typewriter effect */}
				<div className="flex justify-center">
					<div ref={nameTypewriter} className={clsx(`${montserrat.className} md:w-2/4 text-center mt-80`, {
						"name-writer": isDone,
					})}>
						<span className="text-5xl md:text-7xl text-white uppercase">{text}</span>
						<span className="text-5xl md:text-7xl"><Cursor cursorColor="#FFFFFF" cursorStyle="_" /></span>
					</div>
				</div>
				{state && <Header />}
			</header>
			{/* Main background */}
			<main className="mb-7 md:pt-10 lg:pt-20">
				{/* Container */}
				<div className="container mx-auto">
					{/* About Section */}
					<section id="about" className="mb-20 px-5 md:px-0">
						<div className="grid lg:grid-cols-2 lg:space-x-6 xl:space-x-0">
							{/* My Photo */}
							<div data-aos="fade-up-right" className="text-center mb-3">
								<div className="bg-green-400 inline-block">
									<Image src={me} className="md:translate-x-8 md:-translate-y-8" width={500} height={500} alt="personal image" priority />
								</div>
							</div>
							{/* Profile */}
							<div data-aos="zoom-in">
								<div className="lg:columns-2 mb-10">
									<h2 className={`${montserrat.className} m-0 text-white text-3xl lg:text-4xl`}>About Me</h2>
									<div className="border-b-2 border-green-400"></div>
								</div>
								<p className="text-left text-white">
									I am Ahmed, 25 years old. a Bachelor’s degree in Information Systems, a passion for software development and IT. Along with my undergraduate degree, I have received training in Front-End UI and Cross-Platform Mobile Development from the Information Technology Institute (ITI) for 4 months and some online courses like CS50 and Egypt FWD. I have hands-on experience in UI development as a freelance front-end developer. I focus on developing innovative software solutions that enhance user experience and efficiently meet business needs. I love creating dynamic and user-friendly web applications using different skills and technologies like HTML, CSS, JavaScript, and React.js. I have a natural talent for problem-solving and enjoy creatively tackling complex challenges. I am always keen to learn innovative ideas and technologies to enhance my skills and stay up to date with the latest trends in the industry. I am very adaptable when it comes to working in new environments.
								</p>
								<div className="space-y-4 mt-7 px-5 md:p-0 md:space-x-4 md:text-center lg:text-left">
									<a target="_blank" href="mailto:ahmedbadran_@outlook.com?subject=I wanna hire you&body=Hello, Dear Ahmed.%0D%0AYou are ready to take a position as a front-end web developer in a <𝒄𝒐𝒎𝒑𝒂𝒏𝒚 𝒏𝒂𝒎𝒆>, Reply to me in faster time.%0D%0A%0D%0A%0D%0AThanks a lot.%0D%0A<𝒚𝒐𝒖𝒓 𝒏𝒂𝒎𝒆>">
										<button className="border-2 mb-4 border-green-400 bg-green-400 px-16 py-2 rounded text-gray-900 shadow-lg hover:shadow-green-400/50 w-full md:w-fit">Hire Me</button>
									</a>
									<a target="_blank" href="https://1drv.ms/b/s!AgzdrzV12tnKpR8jAcZDGVs29Gd-?e=104NlC">
										<button className="border-2 border-green-400 px-10 py-2 rounded hover:bg-green-400 text-white shadow-lg hover:shadow-green-400/50 w-full md:w-fit">Preview CV</button>
									</a>
								</div>
							</div>
						</div>
					</section>
					{/* Projects Section */}
					<section id="projects" className="mb-20 px-5 md:px-0">
						<div className="lg:columns-2 mb-10" data-aos="fade-up-right">
							<h2 className={`${montserrat.className} m-0 text-white text-3xl lg:text-4xl`}>Recent Projects</h2>
							<div className="border-b-2 border-green-400"></div>
						</div>
						<div className="grid grid-cols-3 gap-8" data-aos="zoom-in">
							<a href="#">
								<div className="transition mb-4 duration-700 origin-top-left hover:rotate-12">
									<Image src={portfolio} width={700} height={700} placeholder={"blur"} alt="portfolio image" />
								</div>
								<div>
									<span className="text-green-400 text-xl font-bold shadow-lg hover:shadow-green-400/50">Portfolio</span>
								</div>
							</a>
							<a target="_blank" href="https://github.com/0badran/cs50-final-project#download-for-windows">
								<div className="transition mb-4 duration-700 origin-top-left hover:rotate-12">
									<Image src={pongGame} width={700} height={1980} alt="pong game image" unoptimized quality={100} />
								</div>
								<div>
									<span className="text-green-400 text-xl font-bold shadow-lg hover:shadow-green-400/50">Pong Game</span>
								</div>
							</a>
							<a target="_blank" href="https://movies-app-tan-beta.vercel.app/">
								<div className="transition mb-4 duration-700 origin-top-left hover:rotate-12">
									<Image src={moviesApp} width={700} height={700} placeholder={"blur"} alt="movies app image" />
								</div>
								<div>
									<span className="text-green-400 text-xl font-bold shadow-lg hover:shadow-green-400/50">Movies App</span>
								</div>
							</a>
							<a target="_blank" href="https://jumia-clone-red.vercel.app/">
								<div className="transition mb-4 duration-700 origin-top-left hover:rotate-12">
									<Image src={jumiaClone} width={700} height={700} placeholder={"blur"} alt="jumia clone image" />
								</div>
								<div>
									<span className="text-green-400 text-xl font-bold shadow-lg hover:shadow-green-400/50">Jumia Clone App</span>
								</div>
							</a>
						</div>
					</section>
					{/* Skills Section */}
					<section id="skills" data-aos="zoom-in" className="mb-20 px-5 md:px-0">
						<div className="grid lg:grid-cols-2 gap-8 content-center">
							{/* Skills */}
							<div>
								<div className="lg:columns-2 mb-10">
									<div className="border-b-2 border-green-400 hidden lg:block"></div>
									<h2 className={`${montserrat.className} m-0 text-white text-3xl lg:text-4xl`}>Skills</h2>
									<div className="border-b-2 border-green-400 block lg:hidden"></div>
								</div>
								<p className="text-left text-white mb-4">
									I have already worked on all the languages ​​and tools mentioned, some are advanced and some are simple. What I mean is that I have used these tools before, not just talking.
								</p>
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
									{
										skills.map(skill =>
											<button key={skill.id} data-aos="fade-up-right" className="bg-gray-800 transform group text-green-400 border-2 border-green-400 p-2 shadow-lg rounded hover:duration-700 hover:text-gray-800 hover:bg-green-400 hover:shadow-green-400/50">
												<p className="p-0 m-0">{skill.name}</p>
												<div className="w-full bg-white rounded-3xl text-center h-1.5 p-0 m-0 invisible group-hover:visible">
													<div className='bg-gray-800 h-1.5 rounded-3xl p-0 m-0' style={{ width: `${skill.degree}%` }}></div>
												</div>
											</button>
										)
									}
								</div>
							</div>
							{/* ////// */}
							<Cube />
						</div>
					</section>
					{/* Contact Me Section */}
					<section id="contactMe" className="px-5 md:px-0">
						<div className="lg:columns-2 lg:space-x-6 xl:space-x-0">
							{/* Photo */}
							<div data-aos="fade-up-right" className="text-center mb-3">
								<div className="bg-green-400 inline-block">
									<Image src={contactMe} className="md:translate-x-8 md:-translate-y-8" width={500} height={500} alt="contact image" />
								</div>
							</div>
							{/* Contact details */}
							<div data-aos="zoom-in">
								<div className="lg:columns-2 mb-10">
									<h2 className={`${montserrat.className} m-0 text-white text-3xl lg:text-4xl`}>Contact Details</h2>
									<div className="border-b-2 border-green-400"></div>
								</div>
								<div className="flex">
									<p className="text-green-400 font-bold">Phone:</p><p className="text-gray-400 text-sm italic ms-8">(+2) 01063806110</p>
								</div>
								<div className="flex">
									<p className="text-green-400 font-bold">Address:</p><p className="text-gray-400 text-sm italic ms-4">Egypt, Mansoura, Nabrouh, Al-Jamia Al-Sharia District, Al-Masjid Street</p>
								</div>
								<div className="flex">
									<p className="text-green-400 font-bold">Email:</p><p className="text-gray-400 text-sm italic ms-10">ahmedbadran_@outlook.com</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</main>
			<footer className="bg-green-400 p-3 mx-5">
				<h2 className="text-center text-xs font-bold text-gray-800">Made By Ahmed Badran ❤️ &copy; 2024</h2>
			</footer>
		</>
	);
}
