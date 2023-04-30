import { getProjects } from "@/sanity/sanity.utils"

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <h1>My projects:</h1>
      <br />
      { projects.map(project => (
        <div key={project._id}>
          <h2>{project.name}</h2>
        </div>
      )) }
    </>
  )
}
