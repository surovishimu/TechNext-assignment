import { Link } from "react-router-dom";


const User = ({ user }) => {
    const { id, image, firstName, lastName, email, address, company } = user;

    return (
        <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 h-full">
            <figure><img src={image} alt="User Avatar" /></figure>
            <div className="card-body">
                <Link to={`/userdetails/${id}`}>
                    <h2 className="card-title cursor-pointer hover:underline underline-offset-8">{firstName} {lastName}</h2>
                </Link>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Address:</strong> {address.address},{address.city}, {address.state}</p>
                <p><strong>Company:</strong> {company.name}</p>
            </div>
        </div>
    );
};

export default User;
