"use client"
import DashboardCard from '@/src/ui/templates/card'
import TableComponent from '../table/tableComp'
import rental_tools_data from '@/src/data/dashboard/rental-tools'

const RestockItemsCard = () => {
  return (
    <DashboardCard title="Restock Items" height="h-[20rem]" icon="package">
      <TableComponent data={rental_tools_data}/>
    </DashboardCard>
  )
}

export default RestockItemsCard
