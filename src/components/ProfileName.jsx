import React from "react";

const Profile = () => {
  return (
    <>
      <div className=" absolute text-black text-2 xl font-semibold">
        Profile : -{" "}
      </div>
      <div className="flex flex-col place-items-center  text-black ">
        <h1 className="text-4xl font-bold mt-12">Hello Students!!!</h1>
        <p className=" font-semibold textarea-md">
          Please enter your credentials
        </p>
        <div className=" flex flex-col gap-6 text-white w-98">
          <div className="w-96">
            <label className="label p-2">
              <span className=" label-text text-slate-400 text-xl font-bold">
                FullName
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div>
            <label className="label p-2">
              <span className=" text-slate-400 text-xl font-bold label-text">
                Class
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div>
            <label className="label p-2">
              <span className=" text-slate-400 text-xl font-bold label-text">
                School/College
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className=" text-slate-400 text-xl font-bold label-text">
                Board
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className=" flex flex-col place-items-center">
            <button className="btn btn-accent w-36">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
