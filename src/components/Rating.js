const Rating = ({ rating }) => {
  const { rate, count } = rating;
  return (
    <>
      <div className="rating rating-half">
        {[...new Array(5)].map((arr, index) => {
          return (
            <>
              <input
                type="radio"
                name="rating-10"
                className={`mask mask-star-2 mask-half-1 ${
                  index > rate && index > parseInt(rate)
                    ? "bg-slate-400"
                    : "bg-black"
                }`}
              />
              {index > rate && index === parseInt(rate) ? (
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-black mask mask-star-2 mask-half-2"
                />
              ) : index < parseInt(rate) ? (
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-black mask mask-star-2 mask-half-2"
                />
              ) : (
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-slate-400 mask mask-star-2 mask-half-2"
                />
              )}
            </>
          );
        })}
        <span>{count}</span>
      </div>
    </>
  );
};

export default Rating;
