// @ts-nocheck
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Button from '../button/Button'
import EditIcon from '@mui/icons-material/Edit';
import { deleteComment } from "../../store/Comments/thunks";
import { fetchComment } from "../../store/Comments/thunks";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const Feedback = (props) => {

  const dispatch = useDispatch();

  const handleDeleteComment = () => {
    dispatch(deleteComment(props.detail_id, props.id));
    dispatch(fetchComment(props.detail_id)); 
  }

  return (
    <div className="border-1 drop-shadow-xl hover:shadow-md hover:shadow-gray-400 hover:-mt-1 mb-8">
      <div className="flex ml-1">
        <div className="p-3 pb-10">
          <div className="font-bold text-yellow-600 text-xl">{props.user}</div>
          <div className="text-black text-xs">{props.createdAt}</div>
        </div>
        <hr />
      </div>
      <div className="flex">
      {props.delete && (
          <div className="flex px-2">
            <button
              className="bg-red-800 rounded-full gap-x-4 pl-1 pt-1 pr-1 pb-1 text-white font-bold hover:shadow-md hover:shadow-gray-400"
              onClick={handleDeleteComment}
              >
              <HighlightOffIcon/>
            </button>
          </div>
        )}
      <div className="text-black text-xs">{props.comment}</div>
      </div>

    </div>
  );
};

export default Feedback;
