const Card = ({ image, title, description }) => {
    return (
        <div className="card-container flex-shrink-0 w-72 p-4 bg-white rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-full h-56 mb-4 overflow-hidden rounded-lg border-4 border-white">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );
};

export default Card;
