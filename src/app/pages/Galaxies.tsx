import React from 'react';
import styled from 'styled-components';
import { GalaxiesLayout } from '../components/GalaxiesLayout';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { LOADING_STATUS, ERROR_STATUS, useFetchGalaxiesInfo } from '../hooks/useFetchGalaxiesInfo';

const GalaxiesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 3rem;
  width: calc(100% - 6rem);
`

export const Galaxies = () => {

    const { galaxies, requestStatus } = useFetchGalaxiesInfo()

    const renderLayout = () => {
        if (requestStatus === LOADING_STATUS) return <LoadingSpinner />
        if (requestStatus === ERROR_STATUS) return <h1>Error</h1>
        return <GalaxiesLayout galaxies={galaxies} />
        // if (props.galaxies.length === 0) return <LoadingSpinner/>
        // return <GalaxiesLayout galaxies={props.galaxies}/>
    }

    return (
        <GalaxiesPageWrapper>
            <h1>Galaxias</h1>
            {renderLayout()}
        </GalaxiesPageWrapper>
    );
}


// En caso que no llegue NODATA, se define por defectopara que no vaya a reventar
Galaxies.defaultProps = {
    Galaxies: []
}