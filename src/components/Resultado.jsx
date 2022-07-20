import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 20px;
`

const Texto = styled.p `
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Imagen = styled.img `
    display: blocK;
    width: 120px;
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
        <Imagen
             src={`https://cryptocompare.com/${IMAGEURL}`} 
             alt="Imagen cripto"
        />
        <div>
            <Texto>El precio es de: <span>{PRICE}</span></Texto>
            <Texto>El precio más alto del dáa: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Valoración últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado
