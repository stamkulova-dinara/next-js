import Image from "next/image";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import '../styles/slide'

export default function BtnSlider({ direction, moveSlide }) {
    console.log(direction, moveSlide);
    return (
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <img src={direction === "next" ? ArrowForwardIosIcon : ArrowBackIosNewIcon} />
      </button>
    );
  }