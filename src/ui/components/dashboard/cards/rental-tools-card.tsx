'use client'
import DashboardCard from '@/src/ui/templates/card'
import TableComponent from '../table/tableComp'
import rental_tools_data from '@/src/data/dashboard/rental-tools'

const RentalToolsCard = () => {
  return (
    <DashboardCard title="Rental Tools" height="h-[20rem]" icon="tools">
      <TableComponent data={rental_tools_data} />
    </DashboardCard>
  )
}

export default RentalToolsCard
