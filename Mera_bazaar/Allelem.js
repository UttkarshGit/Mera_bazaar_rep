import Trending from './Treding';
import Mobile from './Mobile';
import Electronics from './Electronics';
import Books from './Books';
import Furniture from './Furniture';
import Health from './Health';
import Recently from './Recently';
import Crousal from './Crousal'
import { useEffect, useState } from 'react';
import { set } from 'mongoose';
function Allelem()
{
    const [load, setLoad] = useState(true);
    return(
        <>

        <Crousal/>
         <Trending/>
         
         {/* <Mobile/> 
        <Electronics/>
        <Books/>
        <Furniture/>
         <Health/>  */}

        </>
    )
}

export default Allelem;