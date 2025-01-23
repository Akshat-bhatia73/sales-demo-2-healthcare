import { Sidebar } from "@/components/layout/sidebar";
import { SkillConfigWorkflow } from "@/components/skills/configuration/workflow/skill-config-workflow";
import { getSkillIds } from "@/lib/utils/skills";

export const dynamicParams = false

export function generateStaticParams() {
  return getSkillIds();
}

export default function SkillConfigPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="h-screen max-w-[1600px] mx-auto overflow-hidden bg-gradient-to-b flex">
      <Sidebar />
      <div className="p-6  h-screen overflow-auto w-full transition-all duration-300 text-neutral-800">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Configure</h1>
        </div>
        <SkillConfigWorkflow skillId={params.id} />
      </div>
    </div>
  );
}
