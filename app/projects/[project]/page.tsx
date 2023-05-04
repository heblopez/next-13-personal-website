import { getProject } from "@/sanity/sanity.utils";

type Props = {
  params: { project: string }
}

export default async function Project({params}: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className="max-w-3xl mx-auto py-20 px-8">
      <header className="flex items-center justify-between">
        <h1 className="text-5xl drop-shadow font-extrabold bg-gradient-to-l from-orange-400 via-red-500 to-purple-700 bg-clip-text text-transparent">{project.name}</h1>
        <a href={project.url} title="View project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-purple-500 hover:text-purple-50 transition"> View Project</a>
      </header>

      {/* Content goes here */}

      {/* Image goes here */}
    </div>
  )
}