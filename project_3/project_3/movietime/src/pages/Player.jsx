import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import videos from "../assets/Thunivu.mkv";
import "../pages/Player.css"
import { useNavigate } from 'react-router-dom';

function Player() {

  const navigate = useNavigate();

  return (
    <div className='containerp'>
      <div className="player">
        <div className="back">
        <BsArrowLeft onClick={() => navigate(-1)}/>
        </div>
        <video src={videos} autoplay loop controls unmuted></video>
      </div>
    </div>
  )
}

export default Player
