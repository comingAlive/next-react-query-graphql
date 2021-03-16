import useTranslation from "@/hooks/useTranslation";
import { createContext, ReactNode, useContext, useReducer } from "react";

type State = { statusColor: "green" | "red"; statusText: string };
type Action = { type: "ONLINE" | "OFFLINE"; payload?: any };
type Dispatch = (a: Action) => void;
type Reducer<S, A> = (s: S, a: A) => S;

const StatusStateContext = createContext<State>({} as State);
const StatusDispatchContext = createContext<Dispatch>({} as Dispatch);

type Props = { children: ReactNode };
export const StatusContextProvider = ({ children }: Props) => {
  const t = useTranslation();

  const statusReducer: Reducer<State, Action> = (s: State, a: Action) => {
    switch (a.type) {
      case "ONLINE":
        return { ...s, statusText: t.online, statusColor: "green" };
      case "OFFLINE":
        return { ...s, statusText: t.offline, statusColor: "red" };
      default:
        throw new Error(`Unknown action: ${a.type}`);
    }
  };

  const [state, dispatch] = useReducer(statusReducer, {
    statusText: t.online,
    statusColor: "green",
  });

  return (
    <StatusDispatchContext.Provider value={dispatch}>
      <StatusStateContext.Provider value={state}>
        {children}
      </StatusStateContext.Provider>
    </StatusDispatchContext.Provider>
  );
};

export const useStatus = () => useContext(StatusStateContext);
export const useDispatchStatus = () => useContext(StatusDispatchContext);
