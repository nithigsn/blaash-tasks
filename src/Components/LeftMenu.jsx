import { useState } from "react";

function LeftMenu() {

    const [menuItems, setMenuItems] = useState({
        revenue: false,
        shoppable: false,
        story: false,
        live: false,
        playlist: false,
        one: false,
        calender: false,
        hire: false
    });


    const [menu, setMenu] = useState(true);

    // onClick just showing menuitems icon only


    const toggleMenuItem = (item) => {
        setMenuItems((prev) => ({
            ...prev,
            [item]: !prev[item]
        }))

    }




    return (
        <div className="h-[95vh] w-[200px] bg-[#27272f] rounded-xl flex justify-center ">


            <div className="flex flex-col h-[95vh] w-[170px] gap-y-10">



                <div className="flex items-center justify-center h-11">
                    <h3 className="text-white">Blaash</h3>
                </div>

                <div className="absolute z-20 ml-[175px] mt-8 bg-[#737382] size-4 flex items-center justify-center rounded-[50%]" onClick={()=>setMenu(!menu)}>
                    <i className="fa-solid fa-arrow-left text-xs"></i>


                </div>





                {/* Box-1 */}
                <div className={`flex flex-col gap-y-3 text-[#828293] text-sm p-2  ${menuItems.revenue ? "border border-[#017efa] h-24  rounded-xl" : ""}`}>
                    <div className="flex items-center w-[170px] justify-around">
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-box"></i>
                          {
                            menu &&   <p>Revenue</p>
                          }
                        </div>
                        {
                            menuItems.revenue ? <i className="fa-solid fa-arrow-up" onClick={() => toggleMenuItem("revenue")}></i> : <i className="fa-solid fa-arrow-down" onClick={() => toggleMenuItem("revenue")}></i>
                        }

                    </div>
                    <div className={`${menuItems.revenue ? "flex items-center bg-[#5a5a68] w-full h-6 text-white" : "hidden"}`}>
                        <p className="p-1">Revenue</p>
                    </div>
                </div>



                {/* box 2 */}

                <div className="flex flex-col text-[#828293] text-sm">
                    <div className="flex items-center w-[170px] justify-between">

                        <div className="flex items-center gap-1">

                            <i className="fa-solid fa-box"></i>
                           {
                            menu &&  <p>Shoppable Video</p>
                           }
                        </div>
                        {
                            menuItems.shoppable ? <i className="fa-solid fa-arrow-up" onClick={() => toggleMenuItem("shoppable")}></i> : <i className="fa-solid fa-arrow-down" onClick={() => toggleMenuItem("shoppable")}></i>
                        }
                    </div>
                    <div className={`${menuItems.shoppable ? "block" : "hidden"}`}>
                        <p className="text-center">Revenue</p>
                    </div>
                </div>

                {/* box 3 */}




                <div className="flex flex-col text-[#828293] text-sm">
                    <div className="flex items-center w-[170px] justify-between">
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-box"></i>
                            <p>Story</p>
                        </div>
                        {
                            menuItems.story ? <i className="fa-solid fa-arrow-up" onClick={() => toggleMenuItem("story")}></i> : <i className="fa-solid fa-arrow-down" onClick={() => toggleMenuItem("story")}></i>
                        }
                    </div>
                    <div className={`${menuItems.story ? "block" : "hidden"}`}>
                        <p className="text-center">Story</p>
                    </div>
                </div>

                {/* box 4 */}

                <div className="flex flex-col text-[#828293] text-sm">
                    <div className="flex items-center w-[170px] justify-between">
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-box"></i>
                            <p>Live Commerce</p>
                        </div>
                        {
                            menuItems.live ? <i className="fa-solid fa-arrow-up" onClick={() => toggleMenuItem("live")}></i> : <i className="fa-solid fa-arrow-down" onClick={() => toggleMenuItem("live")}></i>
                        }
                    </div>
                    <div className={`${menuItems.live ? "block" : "hidden"}`}>
                        <p className="text-center">Revenue</p>
                    </div>
                </div>

                {/* box 5*/}

                <div className="flex flex-col text-[#828293] text-sm">
                    <div className="flex items-center w-[170px] justify-between">
                        <div className="flex items-center gap-1">

                            <i className="fa-solid fa-box"></i>
                            <p>Playlist Manager</p>
                        </div>
                        {
                            menuItems.playlist ? <i className="fa-solid fa-arrow-up" onClick={() => toggleMenuItem("playlist")}></i> : <i className="fa-solid fa-arrow-down" onClick={() => toggleMenuItem("playlist")}></i>
                        }
                    </div>
                    <div className={`${menuItems.playlist ? "block" : "hidden"}`}>
                        <p className="text-center">Product Playlist</p>
                    </div>
                </div>

                {/* box 6 */}

                <div className="flex flex-col text-[#828293] text-sm">
                    <div className="flex items-center w-[170px] justify-between">
                        <div className="flex items-center gap-1">

                            <i className="fa-solid fa-box"></i>
                            <p>One Click Post</p>
                        </div>
                        {
                            menuItems.one ? <i className="fa-solid fa-arrow-up" onClick={() => toggleMenuItem("one")}></i> : <i className="fa-solid fa-arrow-down" onClick={() => toggleMenuItem("one")}></i>
                        }
                    </div>
                    <div className={`${menuItems.one ? "block" : "hidden"}`}>
                        <p className="text-center">Revenue</p>
                    </div>
                </div>

                {/* box 7 */}

                <div className="flex flex-col text-[#828293] text-sm">
                    <div className="flex items-center w-[170px] justify-between">
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-box"></i>
                            <p>Calendar</p>
                        </div>
                        {
                            menuItems.calendar ? <i className="fa-solid fa-arrow-up" onClick={() => toggleMenuItem("calendar")}></i> : <i className="fa-solid fa-arrow-down" onClick={() => toggleMenuItem("calendar")}></i>
                        }
                    </div>
                    <div className={`${menuItems.calendar ? "block" : "hidden"}`}>
                        <p className="text-center">Revenue</p>
                    </div>
                </div>


                {/* box 8 */}

                <div className="flex flex-col text-[#828293] text-sm">
                    <div className="flex items-center w-[170px] justify-between">
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-box"></i>
                            <p>Hire Influencer</p>
                        </div>
                        {
                            menuItems.hire ? <i className="fa-solid fa-arrow-up" onClick={() => toggleMenuItem("hire")}></i> : <i className="fa-solid fa-arrow-down" onClick={() => toggleMenuItem("hire")}></i>
                        }
                    </div>
                    <div className={`${menuItems.hire ? "block" : "hidden"}`}>
                        <p className="text-center">Revenue</p>
                    </div>
                </div>




            </div>












        </div>
    );
}

export default LeftMenu;