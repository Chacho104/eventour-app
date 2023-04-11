import { useRef } from "react";
import Button from "../ui/button";
import classes from "./events-search.module.css";
function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  const categoryInputRef = useRef();
  const constInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    const selectedCategory = categoryInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth, selectedCategory);
  }
  return (
    <section className={classes["filter-events"]}>
      <div>
        <p>
          Find interesting events faster by filtering our diverse list of
          upcoming events
        </p>
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <div className={classes.label}>
              <label htmlFor="year">Year</label>
            </div>
            <select name="year" id="year" ref={yearInputRef}>
              <option value="">Select year</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          <div className={classes.control}>
            <div className={classes.label}>
              <label htmlFor="month">Month</label>
            </div>
            <select name="month" id="month" ref={monthInputRef}>
              <option value="">Select month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <div className={classes.control}>
            <div className={classes.label}>
              <label htmlFor="category">Category</label>
            </div>
            <select name="category" id="category" ref={categoryInputRef}>
              <option value="">Select category</option>
              <option value="Career development">Career development</option>
              <option value="Exhibition">Exhibition</option>
              <option value="Workshop">Workshop</option>
              <option value="Seminar">Seminar</option>
              <option value="Networking">Networking</option>
              <option value="Health and wellness">Health and wellness</option>
              <option value="Music and clubbing">Music and clubbing</option>
            </select>
          </div>
        </div>
        <Button>Filter</Button>
      </form>
    </section>
  );
}

export default EventsSearch;
