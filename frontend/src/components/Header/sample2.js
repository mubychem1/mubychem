<ul className="relative bg-white border border-gray-200 rounded-2xl shadow-lg">
{menuItems.map((item, index) => (
    <li
        key={index}
        className="relative px-6 py-3 text-gray-800 flex items-center justify-between hover:bg-gray-100 transition-all duration-300 ease-in-out"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
    >
        {/* Main Menu Item */}
        <NavLink
            to={item.link}
            className="text-black hover:text-[#773135] flex items-center gap-2 transition-all duration-300 ease-in-out"
        >
            {item.label}
        </NavLink>

        {/* Submenu - Only shown when the parent is hovered */}
        {item.submenu && hoveredIndex === index && (
            <div className="absolute top-0 left-full ml-2 w-52 bg-white border border-gray-200 rounded-2xl shadow-lg">
                <ul className="py-2">
                    {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="px-4 py-3 hover:bg-gray-100 transition">
                            <NavLink to={subItem.link} className="text-black hover:text-[#773135]">
                                {subItem.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </li>
))}
</ul>