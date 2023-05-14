import { getProject } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string }
}

export default async function Project({params}: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-5xl drop-shadow font-extrabold bg-gradient-to-l from-orange-400 via-red-500 to-purple-700 bg-clip-text text-transparent">{project.name}</h1>
        <a href={project.url} title="View project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-purple-500 hover:text-purple-50 transition"> View Project</a>
      </header>

      {/* Content goes here */}
      <div className="text-lg text-gray-700 my-8">
        <PortableText value={project.content}/>
      </div>

      {/* Image goes here */}
      <Image src={project.image} alt={project.name} width={1920} height={1080} className="border-2 border-purple-700 object-cover rounded-xl"/>
    </div>
  )
}