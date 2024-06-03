"use client"
const MainView = ({children}) => {
    return ( <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[5rem] p-[2rem]">
        {children}
    </div> );
}
 
export default MainView;