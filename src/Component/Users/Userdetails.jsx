import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Userdetails = () => {
    const { id } = useParams();
    const userDetails = useLoaderData();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const findUserDetails = userDetails?.users?.find(userInfo => userInfo.id == id);
        setUser(findUserDetails);
    }, [id, userDetails]);

    return (
        <div className="bg-gray-100 min-h-screen">
            {user && (
                <div className="container mx-auto py-12">
                    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-64 w-full object-cover md:w-64" src={user.image} alt={`${user.firstName} ${user.lastName}`} />
                            </div>
                            <div className="p-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">Name: {user.firstName} {user.lastName}</h2>
                                <p className="text-gray-600">Email Address: {user.email}</p>
                                <div className="mt-4">
                                    <p className="text-gray-700 mb-2"><strong>Address:</strong></p>
                                    <p className="text-gray-700">{user.address?.address}, {user.address?.city}, {user.address?.state}</p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-gray-700 mb-2"><strong>Company:</strong></p>
                                    <p className="text-gray-700">{user.company.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Userdetails;
