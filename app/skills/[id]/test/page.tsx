import { Sidebar } from "@/components/layout/sidebar";
import { SkillTestingEnvironment } from "@/components/skills/testing/skill-testing-environment";
import { getSkillIds } from "@/lib/utils/skills";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSkillIds();
}

export default function SkillTestPage({ params }: { params: { id: string } }) {
  return (
    <div className="h-screen max-w-[1600px] mx-auto overflow-hidden bg-gradient-to-b flex">
      <Sidebar />
      <div className="p-6 h-screen overflow-auto w-full transition-all duration-300 text-neutral-800">
        <h1 className="text-2xl font-bold">Skills Library</h1>
        <p className="text-gray-600">Configure and manage your AI skills</p>
        <SkillTestingEnvironment skillId={params.id} />
      </div>
    </div>
  );
}
