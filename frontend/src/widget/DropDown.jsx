import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function DropDown({ categories = [] }) {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton
        className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold"
        style={{
          backgroundColor: "var(--white)",
          color: "var(--text)",
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "var(--blue)")}
        onMouseOut={(e) => (e.currentTarget.style.color = "var(--text)")}
      >
        Categories
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg outline-1 outline-black/5 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        style={{ backgroundColor: "var(--white)" }}
      >
        <div className="py-1">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <MenuItem key={cat._id}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm data-[focus]:outline-none"
                  style={{ color: "var(--gray)" }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--lightGray)";
                    e.currentTarget.style.color = "var(--text)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--gray)";
                  }}
                >
                  {cat.name}
                </a>
              </MenuItem>
            ))
          ) : (
            <MenuItem>
              <span
                className="block px-4 py-2 text-sm"
                style={{ color: "var(--gray)" }}
              >
                No Categories
              </span>
            </MenuItem>
          )}
        </div>
      </MenuItems>
    </Menu>
  );
}
