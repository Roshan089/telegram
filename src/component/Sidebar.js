import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiSearch } from 'react-icons/tfi';
import { List, InputBase, Typography } from '@mui/material';
import SwitchButton from './SwitchButton';
import Messagelist from './Messagelist';
import axios from 'axios';
import { navbar } from '../constant';

const Sidebar = () => {
    const [toggle, setToggle] = useState(false);
    const [chats, setChats] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
   // const itemsPerPage = 10; // Example: Number of items to display per page

    useEffect(() => {
        const fetchChats = async () => {
            try {const response = await axios.get(`https://devapi.beyondchats.com/api/get_all_chats?page=${currentPage}`);
                
                setChats(response.data.data.data);
            } catch (error) {
                console.error('Error fetching chats:', error);
            }
        };
        fetchChats();
    }, [currentPage]);

    // Pagination functions
    const nextPage = () => {
        if (currentPage <"10") {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        
        setCurrentPage(currentPage - 1);
    };

    const setPage = () => {
        setCurrentPage(currentPage);
    };

    // Calculate current page's starting and ending indices
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = chats.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="relative flex flex-col w-full md:w-[320px] h-full p-3 bg-dark_theme overflow-y-auto border-collapse group">
            {/* Sidebar Header */}
            <div className="flex flex-row py-2 justify-between items-center text-gray-300">
                {/* Hamburger Button */}
                <div className="hover:bg-zinc-700 rounded-full p-2" onClick={() => setToggle(!toggle)}>
                    <RxHamburgerMenu className="text-xl" />
                </div>
                {/* Search Input */}
                <div className="bg-neutral-700 rounded-full p-1 w-full flex flex-row justify-center items-center ml-4">
                    <div className="pl-2">
                        <TfiSearch className="text-md" />
                    </div>
                    <InputBase
                        className="bg-transparent w-full pl-3 p-1 placeholder:text-gray-300 focus:ring-0 outline-none rounded-r-full"
                        placeholder="Search"
                    />
                </div>
            </div>

            {/* Conditional Menu */}
            <div className={`${!toggle ? 'hidden' : 'flex px-2 py-2 backdrop-blur-md bg-black/10 absolute top-10 left-0 mx-4 my-3 min-w-fit z-10 rounded-xl shadow-md'}`}>
                <List>
                    {navbar.map((n) => (
                        <li key={n.key} className="hover:bg-black/60 py-1 pl-1 pr-3 w-full rounded-md">
                            <div className="flex flex-row justify-between items-start">
                                <div className="flex justify-start items-start">
                                    <span className="pr-3 text-lg">{n.icon}</span>
                                    <span className="hidden md:inline">{n.text}</span>
                                </div>
                                <div className="pl-16">
                                    {n.toggleButton}
                                </div>
                            </div>
                        </li>
                    ))}
                    <li className="text-xs text-primary">Telegram Web A 1.61.33</li>
                </List>
            </div>
             {/* Message List */}
            <div className="flex flex-col mt-4">
                <Messagelist chats={chats} />
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-4">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="px-3 py-1 mr-2 bg-gray-700 text-gray-300 rounded-md focus:outline-none"
                >
                    Previous
                </button>
                <Typography variant="body2" className="text-gray-300">
                    Page {currentPage}
                </Typography>
                <button
                    onClick={nextPage}
                    
                    className="px-3 py-1 ml-2 bg-gray-700 text-gray-300 rounded-md focus:outline-none"
                >
                    Next
                </button>
            </div>

           

            {/* Custom Scrollbar Style */}
            <style jsx>{`
                .group:hover .group-hover\:block {
                    display: block;
                }
                .group-hover\\:block {
                    display: none;
                }
                .group::-webkit-scrollbar {
                    width: 8px;
                }
                .group:hover::-webkit-scrollbar-thumb {
                    background-color: darkgrey;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

export default Sidebar;
