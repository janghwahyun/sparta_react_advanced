import React from 'react';
import {useSelector} from "react-redux";
import {apiKey} from './firebase';

export const Permit =(props) =>{

	const is_login = useSelector((state)={state.user.user});

};