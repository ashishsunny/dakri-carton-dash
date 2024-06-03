const rental_tools_data = {
  id: 'rental-tools',
  dataType: 'Your rental tools data',
  tableHeader: ['Work Order', 'Tool Ref.', 'Team Member', 'Status', 'Duration'],
  data: [
    {
      work_order_id: 1,
      tool_id: '6465',
      team_mem: 'Alex Norman',
      status: 'completed',
      duration_minutes: 900,
    },
    {
      work_order_id: 2,
      tool_id: 'AB123',
      team_mem: 'Emily Davis',
      status: 'in progress',
      duration_minutes: 510,
    },
    {
      work_order_id: 3,
      tool_id: 'TY789',
      team_mem: 'Michael Chen',
      status: 'pending',
      duration_minutes: 300,
    },
  ],
}

export default rental_tools_data
