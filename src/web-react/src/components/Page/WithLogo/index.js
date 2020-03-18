import React from 'react'

import { NutriLifeLogo } from '../../NutriLifeLogo'
import { Container } from './styles'


function WithLogo ({ children }){
    return (
       <Container>
       <NutriLifeLogo />
       {children}
       </Container>
           
        )
}

export { WithLogo }