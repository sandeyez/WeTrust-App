/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, {
  createContext, useContext, useState, useEffect, useMemo,
} from 'react';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import settings from '../config/settings';
import { phase1Steps, phase2Steps, phase3Steps } from '../config/steps';

const StepContext = createContext();

export function StepProvider({ children }) {
  const [steps, setSteps] = useState([]);
  const [stepsLoaded, setStepsLoaded] = useState(false);
  const [allSteps, setAllSteps] = useState(phase1Steps);
  const [route, setRoute] = useState('');

  useEffect(() => {
    getStorageInfo();
  }, []);

  useEffect(() => {
    if (stepsLoaded && steps.length === 0) { initSteps(); }
  }, [stepsLoaded]);

  useEffect(() => {
    saveSteps();
  }, [steps]);

  useEffect(() => {
    if (route !== 'DTAS' && route !== 'CR') { return; }

    setAllSteps((s) => s.concat(phase2Steps[route], phase3Steps));
    saveRoute();
  }, [route]);

  function initSteps() {
    for (let i = 0; i < settings.startStep; i += 1) {
      skipStep();
    }
  }

  function recordStep(notes = '') {
    if (steps.length < allSteps.length || route === '') {
      const newStep = {
        id: uuid(),
        datetime: moment().utcOffset(settings.utcOffset),
        notes,
      };
      setSteps((oldSteps) => [...oldSteps, newStep]);
    }
  }

  function skipStep() {
    const newStep = {
      id: uuid(),
      datetime: null,
      notes: '',
    };

    setSteps((oldSteps) => [...oldSteps, newStep]);
  }

  function editStep(id, key, value) {
    const oldSteps = [...steps];
    const step = steps[id];
    step[key] = value;
    oldSteps[id] = step;
    setSteps(oldSteps);
  }

  function mergeTime(id, mode, datetime) {
    const step = steps[id];

    if (!step.datetime) {
      editStep(id, 'datetime', datetime);
    } else {
      const timestamp = new Date(step.datetime);

      if (mode === 'time') {
        timestamp.setHours(datetime.getHours());
        timestamp.setMinutes(datetime.getMinutes());
      } else if (mode === 'date') {
        timestamp.setDate(datetime.getDate());
        timestamp.setMonth(datetime.getMonth());
        timestamp.getFullYear(datetime.setFullYear());
      }
      editStep(id, 'datetime', timestamp);
    }
  }

  // Save to AsyncStorage
  async function saveSteps() {
    await AsyncStorage.setItem('steps', JSON.stringify(steps));
  }

  async function saveRoute() {
    await AsyncStorage.setItem('route', JSON.stringify(route));
  }

  // Load from AsyncStorage
  async function getStorageInfo() {
    await AsyncStorage.getItem('steps')
      .then((value) => {
        value ? setSteps(JSON.parse(value)) : setSteps([]);
      })
      .catch(() => {
        setSteps([]);
      });

    await AsyncStorage.getItem('route')
      .then((value) => {
        const parsedValue = JSON.parse(value);
        if (parsedValue === 'DTAS' || parsedValue === 'CR') {
          setRoute(parsedValue);
        } else { setRoute(''); }
      })
      .catch(() => {
        setRoute('');
      });
    setStepsLoaded(true);
  }

  async function clearSteps() {
    await AsyncStorage.removeItem('steps');
    await AsyncStorage.removeItem('route');
    setSteps([]);
    setRoute('');
    setAllSteps(phase1Steps);
    initSteps();
  }

  const value = useMemo(() => ({
    steps,
    stepIndex: steps.length + 1,
    recordStep,
    skipStep,
    editStep,
    mergeTime,
    clearSteps,
    route,
    setRoute,
    allSteps,
  }), [steps, allSteps]);
  return <StepContext.Provider value={value}>{stepsLoaded && children}</StepContext.Provider>;
}

export function useSteps() {
  return useContext(StepContext);
}
