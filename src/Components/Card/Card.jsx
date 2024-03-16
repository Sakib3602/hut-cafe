import PropTypes from "prop-types";
import { MdOutlineWatchLater } from "react-icons/md";
import { CiMedicalClipboard } from "react-icons/ci";
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
      <div className=" rounded-3xl  w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="p-4 h-[260px] rounded-2xl"
            src={recipe_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="text-gray-400 text-[16px]">{short_description}</p>
          <hr />

          <h1 className="text-[18px] text-gray-800">Ingredients : {ingredients.length}</h1>
          {ingredients.slice(0, 3).map((e, i) => (
            <li className="text-gray-500" key={i}>{e}</li>
          ))}
          <hr />
          <div className="flex space-x-7 text-[16px] mt-3">
           <div className="flex items-center space-x-2">
           <MdOutlineWatchLater></MdOutlineWatchLater>
           <h1> {preparing_time} Min</h1>
           </div>
           <div className="flex items-center space-x-2">
           <CiMedicalClipboard></CiMedicalClipboard>
            <h1>{calories} Calories</h1>
           </div>
          </div>

          <div className="card-actions justify-start">
            <button
              onClick={() => handle(recipe_name, preparing_time, calories)}
              className="btn mt-4 bg-[#0BE58A] rounded-3xl text-white border-none w-[181px]"
            >
              Want To Cook
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
