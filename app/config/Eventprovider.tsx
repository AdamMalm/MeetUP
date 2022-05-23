import React, { createContext, useState, FC, useContext } from "react";
import { EventContextState } from "./types";
import eventdata from '../../jsonconverter'

const contextDefaultValues: EventContextState = {
  eventList: eventdata,
  addEvent: () => {}
};

export const EventContext = createContext<EventContextState>(
  contextDefaultValues
);

export const useSession = () => {
  return useContext(EventContext)
}

const Eventprovider: FC = ({ children }) => {
  const [eventList, setEvent] = useState<string[]>(contextDefaultValues.eventList);

  const addEvent = (newEvent: string) => setEvent((eventList) => [...eventList, newEvent]);

  return (
    <EventContext.Provider
      value={{
        eventList,
        addEvent
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default Eventprovider;