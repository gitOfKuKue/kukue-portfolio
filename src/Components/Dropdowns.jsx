import { faDochub } from "@fortawesome/free-brands-svg-icons";
import { faCode, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Dropdowns({ menus, className }) {
  return (
    <Menu as="div" className={`${className} relative inline-block text-left`}>
      <div>
        <MenuButton className="lg:text-sm md:text-lg sm:text-md xs:text-xs inline-flex w-full justify-center items-center gap-x-1.5 rounded-md  shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:px-4 xs:px-2 sm:py-2 xs:py-1">
          <FontAwesomeIcon icon={menus.icon} />
          {menus.type}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          {menus.menus.map((el) => (
            <MenuItem key={el.menu}>
              <HashLink
                to={el.link}
                className="block px-4 py-3 text-xl text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                <FontAwesomeIcon icon={el.icon} className="mr-3" />
                {el.menu}
              </HashLink>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
