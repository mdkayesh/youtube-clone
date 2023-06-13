import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "./reducer";
import { fetchApiFromUrl } from "../Api/Api";

const Context = createContext();

const initialValues = {
  isOpenSidebar: false,
  isLoading: false,
  homeContents: [],
  searchResults: [],
  currentChannelDetails: null,
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch({ type: "IS_LOADING", payload: true });

    fetchApiFromUrl("home/")
      .then((res) => {
        const { contents } = res;

        dispatch({ type: "GET_HOME_CONTENTS", homeContents: contents });
        dispatch({ type: "IS_LOADING", payload: false });
      })
      .catch((err) => {
        dispatch({ type: "IS_LOADING", payload: false });
        console.log(err);
        setErrorMessage("Something went wrong");
      });

    return () => null;
  }, []);

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  const setIsLoading = (boolean) => {
    dispatch({ type: "IS_LOADING", payload: boolean });
  };

  const getSearchResults = (result) => {
    dispatch({ type: "SEARCH_RESULTS", payload: result });
  };

  const getCurrentChannelDetails = (details) => {
    dispatch({ type: "GET_CURRENT_CHANNEL_DETAILS", details: details });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        toggleSidebar,
        setIsLoading,
        getSearchResults,
        getCurrentChannelDetails,
        errorMessage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

// custom hook

export const useContextValues = () => {
  return useContext(Context);
};
