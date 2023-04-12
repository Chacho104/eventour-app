import { TbCalendarTime } from "react-icons/tb";
import { VscLocation } from "react-icons/vsc";
import { MdOutlinePhone } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import classes from "./event-logistics.module.css";
import Image from "next/image";

function EventLogistics(props) {
  const { title, date, location, time, contact, price, image } = props;
  const readableDate = new Date(date).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  let cost;
  if (+price === 0) {
    cost = "Free";
  } else {
    cost = `$${price}`;
  }

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={"/" + image} alt={title} width={240} height={240} />
      </div>
      <div>
        <div className={classes["logs-item"]}>
          <div className={classes.icon}>
            <TbCalendarTime />
          </div>
          <div>
            <p>{readableDate}</p>
            <p>{time}</p>
          </div>
        </div>
        <div className={classes["logs-item"]}>
          <div className={classes.icon}>
            <VscLocation />
          </div>
          <div>
            <p>{location}</p>
          </div>
        </div>
        <div className={classes["logs-item"]}>
          <div className={classes.icon}>
            <MdOutlinePhone />
          </div>
          <div>
            <p>{contact}</p>
          </div>
        </div>
        <div className={classes["logs-item"]}>
          <div className={classes.icon}>
            <FaMoneyBillWave />
          </div>
          <div>
            <p>{cost}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventLogistics;
