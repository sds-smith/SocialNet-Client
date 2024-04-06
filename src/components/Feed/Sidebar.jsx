import { useCoffees } from "../../utils/hooks/apollo.hooks";
import CoffeeCard from "./CoffeeCard";

export default function Sidebar() {

    const { coffees } = useCoffees();

    return (
      <>
        {Boolean(coffees?.length) && 
          coffees.map((coffee) => (      
              <CoffeeCard key={coffee?.id} coffee={coffee}/>
          ))
        }
      </>
    )
}
