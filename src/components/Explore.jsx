import React from "react";
import maths1 from "../assets/math-1.jpg";
import maths2 from "../assets/maths-2.jpg";
import maths3 from "../assets/maths-3.jpg";
import deld1 from "../assets/deld1.jpg";
import deld2 from "../assets/deld2.jpg";
import deld3 from "../assets/deld3.jpg";

const Explore = () => {
  return (
    <div className="overflow-y-auto h-full">
      {" "}
      <div className="overflow-hidden flex flex-col ">
        <div className="flex flex-col m-6 gap-2">
          <h1 className="text-2xl text-sky-400 font-bold">MATHS :-</h1>
          <div className=" flex flex-row gap-44">
            <div className="card card-compact w-60 h-60 bg-base-100 shadow-xl">
              <figure>
                <img src={maths1} alt="Shoes" />
              </figure>
              <div className="card-body h-40">
                <h2 className="card-title h-20">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary w-24 h-5 p-1">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-60 h-60 bg-base-100 shadow-xl">
              <figure>
                <img src={maths2} alt="Shoes" />
              </figure>
              <div className="card-body h-40">
                <h2 className="card-title h-20">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary w-24 h-5 p-1">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-60 h-60 bg-base-100 shadow-xl">
              <figure>
                <img src={maths3} alt="Shoes" />
              </figure>
              <div className="card-body h-40">
                <h2 className="card-title h-20">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary w-24 h-5 p-1">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-6 gap-2">
          <h1 className="text-2xl text-sky-400 font-bold">DELD :-</h1>
          <div className=" flex flex-row gap-44">
            <div className="card card-compact w-60 h-60 bg-base-100 shadow-xl">
              <figure>
                <img src={deld1} alt="Shoes" />
              </figure>
              <div className="card-body h-40">
                <h2 className="card-title h-20">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary w-24 h-5 p-1">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-60 h-60 bg-base-100 shadow-xl">
              <figure>
                <img src={deld2} alt="Shoes" />
              </figure>
              <div className="card-body h-40">
                <h2 className="card-title h-20">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary w-24 h-5 p-1">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-60 h-60 bg-base-100 shadow-xl">
              <figure>
                <img src={deld3} alt="Shoes" />
              </figure>
              <div className="card-body h-40">
                <h2 className="card-title h-20">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary w-24 h-5 p-1">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat the above content as needed */}
      </div>
    </div>
  );
};

export default Explore;
