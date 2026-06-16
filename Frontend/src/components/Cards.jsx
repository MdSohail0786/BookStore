import PropTypes from "prop-types";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-full max-w-xs bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="h-44 flex items-center justify-center">
          <img
            src={item?.image}
            alt={item?.name || "book"}
            className="h-36 w-full object-contain"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">
            {item?.name}
            <div className="badge badge-secondary">{item?.category}</div>
          </h2>

          <p className="line-clamp-2">{item?.title}</p>

          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item?.price}</div>
            <div className="h-9 cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Cards.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default Cards;
