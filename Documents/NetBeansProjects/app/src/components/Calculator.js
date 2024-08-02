import { useState } from 'react';
function Calculator() {
    
      const [soma, setSoma] = useState("");
function activateLasers(){
    
    setSoma(1*8);
   
};
    return(
           <>
           <h2> {soma} </h2>
            <button onClick={activateLasers}>
                    Ativar Laser    
            </button>
            </>
            );
}
;
export default Calculator;