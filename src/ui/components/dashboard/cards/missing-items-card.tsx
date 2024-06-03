"use client"
import DashboardCard from '@/src/ui/templates/card'
import TableComponent from '../table/tableComp'
import missing_items_data from '@/src/data/dashboard/missing-items'

const MissingItemsCard = () => {
  return (
    <DashboardCard title="Missing items" height="h-[20rem]" width='w-[25rem]' icon="warning">
      <TableComponent data={missing_items_data}/>
    </DashboardCard>
  )
}

export default MissingItemsCard
