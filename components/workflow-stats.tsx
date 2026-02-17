import SortableListDemo from '@/components/workflow';
import StatsActivity from '@/components/stats-activity';

export default function WorkflowStats() {
  return (
    <section className="container mx-auto px-6">
      <div className="grid gap-6 md:grid-cols-2 items-stretch">
        <div className="flex">
          <SortableListDemo inline />
        </div>
        <div className="flex">
          <StatsActivity inline />
        </div>
      </div>
    </section>
  );
}
