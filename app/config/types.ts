export type EventContextState = {
    eventList: string[];
    addEvent: (name: string) => void;
    personalEventList: string[];
    registerEvent: (name: string) => void;
};