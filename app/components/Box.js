import React from 'react'
import { useEffect, useState } from "react";

function Box() {
    const [Text, setText] =  useState("");

    const CountDown = ()=>{
      var countDownDate = new Date("03/10/2024 10:1 AM"); 
      var x = setInterval(function() { 
      var now = new Date().getTime(); 
      var distance = countDownDate - now;
          
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
      // Output the result in an textState
       if (distance <= 0) {
          clearInterval(x);
          setText(`ESTE PROJECTO ESTA PRESTES A SER PUBLICADO !`);
       }else{
         setText("O projecto sera lançado  em " + days + " dias " + hours + " horas "  + minutes + " minutos e " + seconds + " segundos ");
        }
      }, 1000);
  }
  
  useEffect(() => {
    CountDown();
  }, []);
  
 
  return (
    <div>
         <h1>Wizashop website on Production </h1><br />
        <h3>Kiosso Camuegi</h3><br />
        <h2>{Text}</h2>
    </div>
  )
}

export default Box