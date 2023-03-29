import React from "react";
import './searchBar.scss'
import { FaSearch } from 'react-icons/fa';


interface SearchBarProps {
    searchTerm: string;
    onSearch: (title: string) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ searchTerm, onSearch, onChange }: SearchBarProps) => {
    return (
        <div className="search">
            <input
                value={searchTerm}
                onChange={onChange}
                placeholder="Search for food"
            />
            <FaSearch onClick={() => onSearch(searchTerm)} />
        </div>
    );
};

export default SearchBar;