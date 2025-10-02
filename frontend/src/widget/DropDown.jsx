import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function DropDown({ categories = [] }) {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:text-blue-600">
        Categories
        
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <MenuItem key={cat._id}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  {cat.name}
                </a>
              </MenuItem>
            ))
          ) : (
            <MenuItem>
              <span className="block px-4 py-2 text-sm text-gray-400">
                No Categories
              </span>
            </MenuItem>
          )}
        </div>
      </MenuItems>
    </Menu>
  );
}
