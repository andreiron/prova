import { handler } from "daisyui";
import React from "react";
import { useState } from "react";

const defaultMsg = ["ciao", "dio cane"]

export default function Griglia() {

    const [msg, setMsg] = useState("ciao")
    const [index, setIndex] = useState(0)
    const [show, setShow] = useState(false)



    function hadler(e){
        e.preventDefault()
        if (index === 0) {
            e.target.className = "bg-green-500"
            setIndex(1)
        }
        else{
            e.target.className = "bg-red-500"
            setIndex(0)
        }

    }

    function hadlerReset(e){

        e.preventDefault()
        let span = document.querySelectorAll("span")
        
        span.forEach(element => {
            if (element.className == "bg-green-500" || element.className == "bg-red-500") 
            element.className = "bg-blue-500"
        });

    }

    function tris(){
        let ret = []
        for (let i = 0; i < 9; i++) {
            ret.push(<span className="bg-blue-500" onClick={hadler} >{i + 1}</span>)
        }
        return ret;
    }

    const weekday = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom']

    function day(){
        let ret = []
        for (let i = 0; i < weekday.length; i++) {
            ret.push(<span className="bg-blue-500">{weekday[i]}</span>)
        }
        return ret;
    }

    function f (d ,month) {
        
        let ret = []
        

        for (let i = 0; i < d; i++) {
            ret.push(<span className="bg-blue-500" ></span>)
        }

        for (let i = 0; i < month; i++) {
            ret.push(<span className="bg-blue-500" onClick={hadler} >{i + 1}</span>)
        }
        
        return ret;
    }

    return (
        <>
        <div className="w-3/4 h h-3/4 relative">

        <span className="inline-grid grid-cols-3 grid-rows-3 gap-4 w-full h-full border-4 border-black p-4">
            {tris()}
        </span>

        <button className="btn btn-info" onClick={hadlerReset} value={msg}>{msg}</button>
        {show && <button className=" btn btn-error">{msg}</button>}
        </div>
        </>
    )
}