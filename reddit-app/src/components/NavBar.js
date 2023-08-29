import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateNavigation } from '../reducers/navigationSlice';
import './NavBar.css';
import logo from '../Reddit-Logo.svg';
import { useState } from 'react';
import { SearchBar } from './SearchBar';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationItems = useSelector((state) => state.navigation.navigationItems);
  const selectedNavigationItem = useSelector((state) => state.navigation.selectedNavigationItem);
  const dispatch = useDispatch();

  const handleItemClick = (item) => {
    dispatch(updateNavigation(item));
    setIsOpen(false);
  };

  return (
    <nav>
      <img src={logo} alt="Reddit Logo" className="logo" />
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
          {selectedNavigationItem ? selectedNavigationItem.title : 'Navigation'}
        </button>
         <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
          {navigationItems.map((item) => (
            <li key={item.id} onClick={() => handleItemClick(item)}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <SearchBar />
      <ul className='dropdown-desktop'>
      {navigationItems.map((item) => (
            <li key={item.id} onClick={() => handleItemClick(item)}>
              {item.title}
            </li>
          ))}
      </ul> 
    </nav>
  );
};

