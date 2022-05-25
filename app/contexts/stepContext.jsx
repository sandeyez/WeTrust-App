import { createContext, useContext, useState, useEffect } from "react";
import moment from "moment";
import settings from "../config/settings";
import { v4 as uuid } from "uuid";
import allSteps from "../config/steps";

const StepContext = createContext();

export function StepProvider({ children }) {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    if (steps.length === 0)
      for (let i = 0; i < settings.startStep; i++) {
        skipStep();
      }
  }, []);

  function recordStep() {
    if (steps.length < allSteps.length) {
      const newStep = {
        id: uuid(),
        datetime: moment().utcOffset(settings.utcOffset),
        notes: "",
      };
      setSteps((oldSteps) => [...oldSteps, newStep]);
    }
  }

  function skipStep() {
    const newStep = {
      id: uuid(),
      datetime: null,
      notes: "",
    };
    console.log("Added step", newStep);

    setSteps((oldSteps) => [...oldSteps, newStep]);
  }

  function editStep(id, key, value) {
    console.log(id, key, value);
    let oldSteps = [...steps];
    let step = steps[id];
    step[key] = value;
    oldSteps[id] = step;
    setSteps(oldSteps);
  }

  function mergeTime(id, mode, datetime) {
    const step = steps[id];

    if (!step.datetime) {
      editStep(id, "datetime", datetime);
    } else {
      let timestamp = new Date(step.datetime);

      if (mode === "time") {
        timestamp.setHours(datetime.getHours());
        timestamp.setMinutes(datetime.getMinutes());
      } else if (mode === "date") {
        timestamp.setDate(datetime.getDate());
        timestamp.setMonth(datetime.getMonth());
        timestamp.getFullYear(datetime.setFullYear());
      }
      editStep(id, "datetime", timestamp);
    }
  }

  const value = {
    steps,
    stepIndex: steps.length + 1,
    recordStep,
    skipStep,
    editStep,
    mergeTime,
  };
  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
}

export function useSteps() {
  return useContext(StepContext);
}
