import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white text-center pt-4">
          <p className="text-2xl px-2 pt-4 font-bold">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mt-4 bottom-4 hover:bg-gray-300 duration-200 hover:scale-105">
            Order Now!
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white text-center pt-4">
          <p className="text-2xl px-2 pt-4 font-bold">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mt-4  bottom-4 hover:bg-gray-300 duration-200 hover:scale-105">
            Order Now!
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute bg-black/50 text-white w-full h-full rounded-xl text-center pt-4">
          <p className="text-2xl px-2 font-bold pt-4">
            We Deliver Desserts Too
          </p>
          <p className=" px-2 ">Tasty Treats</p>
          <button className="bg-white border-white text-black  mt-4 bottom-4 hover:bg-gray-300 duration-200 hover:scale-105">
            Order Now!
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
