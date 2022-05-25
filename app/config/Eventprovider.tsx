import React, { createContext, useState, FC, useContext } from "react";
import { EventContextState } from "./types";
import eventdata from '../../jsonconverter'

const contextDefaultValues: EventContextState = {
  eventList: eventdata,
  addEvent: () => {},
  personalEventList: [],
  registerEvent: () => {}
};

export const EventContext = createContext<EventContextState>(
  contextDefaultValues
);

export const useSession = () => {
  return useContext(EventContext);
}

const Eventprovider: FC = ({ children }) => {
  const [eventList, setEvent] = useState<string[]>(contextDefaultValues.eventList);
  const [personalEventList, setPersonalEvent] = useState<string[]>(contextDefaultValues.personalEventList);

  const addEvent = (newEvent: string) => setEvent((eventList) => [...eventList, newEvent]);
  const registerEvent = (newEvent: string) => setPersonalEvent((personalEventList) => [...personalEventList, newEvent]);

  return (
    <EventContext.Provider
      value={{
        eventList,
        addEvent,
        personalEventList, 
        registerEvent
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default Eventprovider;