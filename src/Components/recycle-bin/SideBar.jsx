import React from "react";

const SideBar = () => {
  return (
    <>
      {/* Side Bar */}
      <aside className="fixed bg-border w-60 h-screen text-aboutme flex flex-col justify-start gap-5 pl-5 py-5">
        <h1 className="text-2xl mr-5 mb-20 text-center">
          <FontAwesomeIcon icon={faDochub} /> Website DOC
        </h1>
        {menus.map((menu) => (
          <button
            key={menu.id}
            className={`${
              menu.isCurrent && "bg-iconic"
            } p-5 hover:bg-background hover:text-font text-xl rounded-tl-md rounded-bl-md`}
            onClick={() => handleClick(menu.id)}
          >
            <FontAwesomeIcon icon={menu.icon} className="w-10" />
            {menu.menu}
          </button>
        ))}
        <hr />
        <Link
          to="/"
          className="flex justify-start items-center text-2xl font-bold gap-5 text-red-700 mx-auto"
        >
          <FontAwesomeIcon icon={faDoorOpen} className="text-4xl" /> Exit
        </Link>
        <div className="mt-auto">
          <Link
            to="/profile"
            className="flex justify-start items-center text-2xl font-bold gap-5"
          >
            <FontAwesomeIcon icon={faCircleUser} className="text-5xl" />
            Ku Kue
          </Link>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
