'use client'
import MainView from '@/src/mainView'
import RentalToolsCard from '@/src/ui/components/dashboard/cards/rental-tools-card'
import MissingItemsCard from '@/src/ui/components/dashboard/cards/missing-items-card'
import RestockItemsCard from '@/src/ui/components/dashboard/cards/restock-items-card'
import WorkOrderCard from '@/src/ui/components/dashboard/cards/work-order-card'


const Layout = ({ children }) => {
  return (
    <div className="flex">
        <MainView>
          <RentalToolsCard />
          <WorkOrderCard />
          <RestockItemsCard />
          <MissingItemsCard />
        </MainView>
    </div>
  )
}

export default Layout
