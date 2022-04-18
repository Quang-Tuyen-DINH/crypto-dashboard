import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useInputService = () => {
  const dispatch = useDispatch();

  const saveForm = (type: string, payload: any) => {
    dispatch({
      type: type,
      payload: payload
    })
  }

  const test = (text: string) => {
    console.log(text)
  }

  return (null)
}

export default useInputService;
