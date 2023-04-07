import { Fragment, useState } from "react";
import classes from "./process.module.css";

function Process() {
  const [goersProcess, setGoersProcess] = useState(true);
  const [creatorsProcess, setCreatorsProcess] = useState(false);

  function eventGoersProcess() {
    setCreatorsProcess(false);
    setGoersProcess(true);
  }

  function eventCreatorsProcess() {
    setGoersProcess(false);
    setCreatorsProcess(true);
  }
  return (
    <section className={classes.process}>
      <h1>Eventour guarantees the success of events</h1>
      <div className={classes.btns}>
        <div>
          <button
            className={goersProcess ? classes.active : ""}
            onClick={eventGoersProcess}
          >
            Event goers
          </button>
        </div>
        <div>
          <button
            className={creatorsProcess ? classes.active : ""}
            onClick={eventCreatorsProcess}
          >
            Event creators
          </button>
        </div>
      </div>
      <hr />
      {goersProcess && (
        <div>
          <p>Process for event goers</p>
        </div>
      )}
      {creatorsProcess && (
        <div>
          <p>Process for event creators</p>
        </div>
      )}
    </section>
  );
}

export default Process;
