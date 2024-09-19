import { useCallback, useState } from "react";
import Box from "../Box/Box";
import update from "immutability-helper";
import Dustbin from "../Dustbin/Dustbin";

function ThrowTrash() {
  const dustbin = {
    name: "Dustbin",
  };
  const [trashes, setTrash] = useState([
    {
      name: "Glass",
      url: "https://dynamic.zacdn.com/1-N4N-4omm1hrfeAneBNPtPOxVM=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/union-glass-8846-2420961-2.jpg",
    },
    {
      name: "Banana",
      url: "https://th-thumbnailer.cdn-si-edu.com/6RD8JDrASGTSjdbsJkg-37OY9mQ=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg",
    },
    {
      name: "Paper",
      url: "https://5.imimg.com/data5/SELLER/Default/2020/10/NV/HZ/SS/16049514/black-pepper-500x500-500x500.jpg",
    },
  ]);
  const handleRemove = useCallback((object) => {
    const removeIndex = trashes.indexOf(object);
    setTrash((oldTrashs) => {
      return update(oldTrashs, {
        $splice: [[removeIndex, 1]],
      });
    });
  });
  const reset = useCallback((e) => {
    setTrash([
      {
        name: "Glass",
        url: "https://dynamic.zacdn.com/1-N4N-4omm1hrfeAneBNPtPOxVM=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/union-glass-8846-2420961-2.jpg",
      },
      {
        name: "Banana",
        url: "https://th-thumbnailer.cdn-si-edu.com/6RD8JDrASGTSjdbsJkg-37OY9mQ=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg",
      },
      {
        name: "Paper",
        url: "https://5.imimg.com/data5/SELLER/Default/2020/10/NV/HZ/SS/16049514/black-pepper-500x500-500x500.jpg",
      },
    ]);
  });
  return (
    <>
      <div className="w-full  flex justify-center">
        <Dustbin object={dustbin} />
      </div>
      <div className="flex">
        {trashes.length > 0 ? (
          trashes.map((trash, index) => (
            <Box key={index} object={trash} handleRemove={handleRemove} />
          ))
        ) : (
          <div className="h-[100px]">
            <p>Oops ! </p>
            <button
              className="border rounded-md bg-blue-500 text-white px-2"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ThrowTrash;
