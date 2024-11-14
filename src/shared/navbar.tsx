// Navbar.tsx
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { navbar } from '@/constants/navbar';

interface MenuItem {
  id: string;
  label: string;
  description: string;
  subItems?: MenuItem[];
}

interface MenuItemProps {
  item: MenuItem;
  depth?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // Check if the click is on any shepherd element
        const shepherdElement = (event.target as Element).closest('.shepherd-element');
        if (!shepherdElement) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (item.subItems) {
    return (
      <li ref={menuRef} className={`relative ${depth === 0 ? 'group' : ''}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-4 py-2 hover:bg-gray-100 hover:text-black w-full text-left"
          id={item.id}
        >
          {item.label}
          {isOpen ? <ChevronDown className="ml-1" size={14} /> : <ChevronRight className="ml-1" size={14} />}
        </button>
        {isOpen && (
          <ul className={`absolute z-50 bg-black text-white border border-gray-200 rounded shadow-lg ${
            depth === 0 ? 'left-0 top-full' : 'left-full top-0'
          } w-48`}>
            {item.subItems.map((subItem) => (
              <MenuItem key={subItem.id} item={subItem} depth={depth + 1} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-gray-100 hover:text-black w-full text-left"
        id={item.id}
        // data-guide-id={item.id}
        // aria-label={item.description}
      >
        {item.label}
      </a>
    </li>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className=" shadow">
      <ul className="flex">
        {navbar.map((item) => (
          <MenuItem key={item.id} item={item} depth={0} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;