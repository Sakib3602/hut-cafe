import PropTypes from "prop-types";

const Card = ({ api, handle }) => {
  const {
    calories,
    ingredients,
  
    preparing_time,
    recipe_image,
    recipe_name,
    short_description,
  } = api;

  return (
    <div>
      <div className="card card-compact  w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="p-4 h-[260px] rounded-2xl"
            src={recipe_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>
          <hr />

          <h1 className="text-[18px]">Ingredients : {ingredients.length}</h1>
          {ingredients.slice(0, 3).map((e, i) => (
            <li key={i}>{e}</li>
          ))}
          <hr />
          <div className="flex space-x-7 text-[16px]">
            <h1>{preparing_time} Min</h1>
            <h1>{calories} Calories</h1>
          </div>

          <div className="card-actions justify-start">
            <button
              onClick={() => handle(recipe_name, preparing_time, calories)}
              className="btn btn-primary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  api : PropTypes.object,
  handle: PropTypes.func,
  calories : PropTypes.number,
  ingredients : PropTypes.array,
  
  preparing_time : PropTypes.number,
  recipe_image : PropTypes.img,
  recipe_name : PropTypes.string,
  short_description : PropTypes.string
};

export default Card;
