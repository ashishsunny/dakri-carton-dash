import DashboardCard from '@/src/ui/templates/card'
import DoughnutChart from '../../charts/doughnut'
import { workOrderCardData } from '@/src/data/dashboard/work-order';

const WorkOrderCard = () => {
  const data = workOrderCardData
  return (
    <DashboardCard
      title={data.title}
      height={data.height}
      width={data.width}
      icon={data.icon}
    >
      <DoughnutChart
        data={data.data}
        labels={data.labels}
        centerLabel={data.centerLabel}
      />
    </DashboardCard>
  );
};

export default WorkOrderCard;