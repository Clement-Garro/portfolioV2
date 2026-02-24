import ProjectContent from '@/components/ProjectContent'


export default function ProjectPage({params}: { params: { id: string } }) {
  return <ProjectContent projectId={params.id} />;
}

