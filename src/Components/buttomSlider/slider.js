import "./slider.scss";
import { IoIosArrowDropright } from "react-icons/io";
import { buttomData } from "./sliderData";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

function Slider() {
  const [width, setWidth] = useState(0);
  const sl_slider = useRef();
  useEffect(() => {
    setWidth(sl_slider.current.scrollWidth - sl_slider.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="sl_grp1">
        <span className="sl_header">Games On Sale</span>
        <span className="sl_arrow2">
          <IoIosArrowDropright />
        </span>
      </div>
      <motion.div ref={sl_slider} className="sl_slider">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="sl_flex"
        >
          {buttomData.map((val, key) => {
            return (
              <motion.div key={key} className="items_flex">
                <div
                  className="sl_img"
                  style={{ backgroundImage: `url(${val.Image})` }}
                ></div>
                <span className="sl_text">{val.title}</span>
                <span className="sl_text2">{val.category}</span>
                <span className="sl_price">{val.price}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Slider;
