// @ts-nocheck
import React, { useContext } from "react";

// import { TokenContext } from "../utils/context";
// import format from "../utils/formatprice";

const Card = (props) => {

  // const { token, setToken } = useContext(TokenContext);
  // const router = useRouter();

  const handleEdit = (id) => {
    // router.push(`/updateroom/${id}`);
  };

  const handleDelete = () => {
    // let myHeaders = new Headers();
    // myHeaders.append(`Authorization`, `Bearer ${token}`);
    // myHeaders.append(`Content-Type`, `application/json`);

    // let requestOptions = {
    //   method: "DELETE",
    //   headers: myHeaders,
    //   redirect: "follow",
    // };

    // fetch(`https://mnroom.capstone.my.id/rooms/${props.delete}`, requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     const { status } = result;
    //     if (status === "success") {
    //       alert(status);
    //       window.location.reload();
    //     }
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
  };

  return (
    <div className="border-1 drop-shadow-xl hover:shadow-md hover:shadow-gray-400 hover:-mt-1 mb-4">
      <div className=" py-4">
        <div className="h-96 flex justify-center cursor-pointer">
          <a href={`/${props.id}`}>
            <img
              src={props.image}
              className="h-full w-[90%]"
              alt=""
              width={250}
              height={50}
            />
          </a>
        </div>
        <div className="flex ml-1">
          <div className="p-3 pb-0">
            <div className="font-bold text-[#085E7D] text-xl">{props.title}</div>
            <div className="font-bold flex justify-between text-black/95">
              Rp {format(props.price)}
            </div>
            <div className="text-black/70">{props.city}</div>
          </div>
        </div>
      </div>

      <div className="flex mb-8 ml-2">
        {props.edit && ( // 1, 2
          <div className="flex px-2">
            <button
              className="bg-teal-600 py-2 px-4 text-white font-bold hover:shadow-md hover:shadow-gray-400 rounded"
              onClick={() => handleEdit(props.edit)}
            >
              Edit
            </button>
          </div>
        )}
        {props.delete && (
          <div className="flex px-2">
            <button
              className="bg-red-800 py-2 px-4 text-white font-bold hover:shadow-md hover:shadow-gray-400 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
