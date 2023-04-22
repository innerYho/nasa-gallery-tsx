import React from 'react'
import { StyledGalaxiesLayout } from './styles'
import { GalaxyCard } from './GalaxyCard'
import { GalaxiesProps } from './GalaxyCard/type'


export const GalaxiesLayout = ({ galaxies }: GalaxiesProps) => {
    return (
        <StyledGalaxiesLayout>
            {galaxies?.map(galaxy => <GalaxyCard key={galaxy.data[0].nasa_id} galaxy={galaxy} />)}
        </StyledGalaxiesLayout>
    )
}