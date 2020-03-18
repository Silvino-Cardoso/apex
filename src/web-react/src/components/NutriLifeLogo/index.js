import React from "react"

import { LogoImg } from "./styles"

function NutriLifeLogo ({ children }){
    return (
       <div>
         < LogoImg src={process.env.PUBLIC_URL + '/assets/images/Vector.svg'} alt="" />
                  
         < img src={process.env.PUBLIC_URL + '/assets/images/Circle.svg'} alt="" />
         
         {children}
       
       </div>
           

        )
}

export { NutriLifeLogo }