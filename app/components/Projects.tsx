import Image from "next/image";
import moviesApp from "@/public/images/movies-app.png";
import jumiaClone from "@/public/images/jumia-clone.png";
import portfolio from "@/public/images/portfolio.png";
import pongGame from "@/public/images/pong-game.gif";


export default function Projects() {
  return (
    <div className="grid grid-cols-3 gap-8" data-aos="fade-up-right">
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
  )
}