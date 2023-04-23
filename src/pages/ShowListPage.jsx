import { useEffect, useState } from "react";
import searchShows from "../api";
import SearchBar from "../components/SearchBar";
import ShowCard from "../components/ShowCard";
import {showLoadedAction} from "../actions/Shows";
import { connect } from "react-redux";

function ShowListPage({showsLoaded}) {
    const[shows, setShows] = useState([]);
    const[query, setQuery] = useState("");
    useEffect(()=>{
        searchShows(query).then(shows=>showsLoaded(shows))
    },[query]);
    
  return (
    <div className="mt-2">
      <SearchBar value={query} onChange={(event)=>{setQuery(event.target.value)}} />
      <div className="flex flex-wrap justify-center">
       {shows.map((shows)=>
       (<ShowCard key={shows.id} show={shows}/>))}
        
      </div>
    </div>
  );
}

const mapDispatchToprops = {
    showsLoaded: showLoadedAction,
};

export default connect(undefined, mapDispatchToprops)(ShowListPage);
