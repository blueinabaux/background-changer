import { useState } from "react";

const Changer = () => {

    const [color, setColor] = useState("white");
    return ( 
        <>
            <div 
            className="container h-screen w-full flex justify-center items-end relative"
            style={{backgroundColor: color}}
            >
                <div className="colorName h-full w-full bg-transparent flex justify-center items-center absolute z-[1]">
                    <h1 className="text-black font-thin text-[150px]">{color}</h1>
                </div>
                <div className="bottom h-[70px] w-[50%] bg-white flex justify-around items-center rounded-[10px] z-[2]">
                    <button onClick={() => setColor("red")} className="h-[70%] w-[100px] rounded-[5px]" style={{backgroundColor:"red"}}></button>
                    <button onClick={() => setColor("blue")} className="h-[70%] w-[100px] rounded-[5px]" style={{backgroundColor:"blue"}}></button>
                    <button onClick={() => setColor("green")} className="h-[70%] w-[100px] rounded-[5px]" style={{backgroundColor:"green"}}></button>
                    <button onClick={() => setColor("purple")} className="h-[70%] w-[100px] rounded-[5px]" style={{backgroundColor:"purple"}}></button>
                    <button onClick={() => setColor("orange")} className="h-[70%] w-[100px] rounded-[5px]" style={{backgroundColor:"orange"}}></button>
                </div>

            </div>
        </>
     );
}
 
export default Changer;