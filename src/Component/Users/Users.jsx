import React, { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchStatus, setSearchStatus] = useState("idle");
    const [sortCriteria, setSortCriteria] = useState("name"); // Default sort criteria

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.users);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                setLoading(false);
            });
    }, []);

    // Function to handle search
    const handleSearch = () => {
        setSearchStatus("searching");
        // Filter users based on search term
        const filtered = users.filter(user => {
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            return fullName.includes(searchTerm.toLowerCase());
        });
        setFilteredUsers(filtered);
        setSearchStatus(filtered.length ? "done" : "notFound");
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch();
    };

    // useEffect to reset filteredUsers when searchTerm changes
    useEffect(() => {
        if (searchTerm === "") {
            setFilteredUsers(users);
            setSearchStatus("idle");
        }
    }, [searchTerm, users]);

    // Function to handle sorting
    const handleSort = (event) => {
        const criteria = event.target.value;
        setSortCriteria(criteria);
        let sortedUsers = [...filteredUsers];
        if (criteria === "name") {
            sortedUsers.sort((a, b) => {
                return a.firstName.localeCompare(b.firstName);
            });
        } else if (criteria === "email") {
            sortedUsers.sort((a, b) => {
                return a.email.localeCompare(b.email);
            });
        } else if (criteria === "company") {
            sortedUsers.sort((a, b) => {
                return a.company.name.localeCompare(b.company.name);
            });
        }
        setFilteredUsers(sortedUsers);
    };

    return (
        <div className="container mx-auto px-4 lg:px-0">
            <h1 className="text-2xl font-bold mb-4">User Profiles</h1>
            <div className="flex justify-end mb-4">
                <form onSubmit={handleSubmit} className="flex items-center">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by name"
                        className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Search
                    </button>
                </form>
                <select onChange={handleSort} value={sortCriteria} className="ml-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                    <option value="name">Sort by name</option>
                    <option value="email">Sort by email</option>
                    <option value="company">Sort by company name</option>
                </select>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                    {searchStatus === "notFound" ? (
                        <p className="text-red-500 text-center col-span-3">No data found</p>
                    ) : (
                        filteredUsers.map(user => <User key={user.id} user={user} />)
                    )}
                </div>
            )}
        </div>
    );
};

export default Users;
