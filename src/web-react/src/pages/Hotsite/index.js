import React from "react"

import { WithLogo } from "../../components/Page/WithLogo"
import { RightCircle, LoginButton, LeftCircle, Title, SubTitle, SignUpButton, Content, ContentIlustration} from './styles'
import { FaUserShield } from 'react-icons/fa'


function Hotsite() {
    return (
        <WithLogo>
            <RightCircle>
                <img src={process.env.PUBLIC_URL + '/assets/images/HotsiteCircleRight.svg'} alt=""/>

                <LoginButton to="/" outlined ><FaUserShield />ENTRAR</LoginButton>

            </RightCircle>

            <Content>
                <Title>
                 Acompanhamento nutricional personalizado
                </Title>

                <SubTitle>
                Melhore sua saúde e bem estar sem sair de casa!
                </SubTitle>

                <SignUpButton to="/">CADASTRE-SE</SignUpButton>

            </Content>

            <LeftCircle>
            <img  src={process.env.PUBLIC_URL + '/assets/images/LeftCircle.svg'} alt=""/>
            </LeftCircle>

            <ContentIlustration>
                <img src={process.env.PUBLIC_URL + '/assets/images/HotsiteIlustration.svg'} alt="" width="400"/>
            </ContentIlustration>


            
        </WithLogo>
    )
}



export { Hotsite }
