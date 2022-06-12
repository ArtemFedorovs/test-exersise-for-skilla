import React, {useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
//THis hook fetch data and dispatch it in  state.results

type headersType = {
    [key: string]: string 
  }


export default function useFetchDataAndDispatch(url: string, method: 'POST'|'GET'|"PUT"|"DETETE", getParam: Array<string>|null=null, headers?: headersType): void {
  const fullurl=getParam? url+'?'+getParam.reduce((sum, current)=>{return sum + current+'&'},""):url;  //adding get parameters to url if they exists

  
  const dispatch=useDispatch();
  
    function FetchData(url: string){
     
        fetch(fullurl, {
          method: method,
          headers: headers,       
        })
        .then(responce=>{
          if(!responce.ok){
           throw new Error(responce.statusText)
          }
          return responce
        })
        .then(responce=>responce.json())
        .then(responce=>dispatch(FetchDataSuccess(responce)))
    };
    function FetchDataSuccess(responce: any){
      return {
      type: "FETCH_DATA_SUCCESS",
      payload: responce
      }
    };
    const Filter = useSelector((state: any)=>state.Filter);  
    useEffect(()=>{ FetchData(url)},[Filter.periodFilter] );
    return ;
}
