import CallLine from '../CallLine/CallLine';
import useFetchDataAndDispatch from '../../Hooks/useFetchDataAndDispatch';
import {useSelector} from 'react-redux';

export default function CallsList(props: any) :any {
  

  type ChosenFilterType={
    typeFilter: string,
    periodFilterName:string,
    periodFilter: Array<string>
  }
  const ChosenFilter: ChosenFilterType = useSelector((state:any)=>state.Filter);  //taking applied filter from store
  const CallsList = useSelector((state: any)=>state.calls.results); //takind data from store

  useFetchDataAndDispatch("https://api.skilla.ru/mango/getList", // hook that fetch data and dispatch it when state.periodFilter  changes (like useEffect)
                          "POST",
                          ["date_start="+ChosenFilter.periodFilter[0], "date_end="+ ChosenFilter.periodFilter[1], "limit=1000"], 
                          {Authorization: "Bearer testtoken"}) 

                          

  let FiltredData:any =[]; //filter callslist (choose right call type)
  CallsList && (FiltredData = CallsList.filter((elem:any)=>{return ChosenFilter.typeFilter==="Все типы" || ChosenFilter.typeFilter==="Входящие" && elem.in_out===1 || ChosenFilter.typeFilter==="Исходящие" && elem.in_out===0}))




  if (FiltredData===undefined) return <></>;
    return <> 
    {FiltredData.map((unit: any)=>
        <CallLine 
          key={unit.id} 
          in_out={unit.in_out} 
          status={unit.status} 
          date={unit.date} 
          person_avatar={unit.person_avatar} 
          from_site={unit.from_site}
          source={unit.source} 
          score={unit.score}  
          time={unit.time}
          contact_name={unit.contact_name}
          contact_company={unit.contact_company}
          from_number={unit.from_number}
          to_number={unit.to_number}
          record={unit.record}
        />
    )}
  </>


}

