import React from 'react'

import DivergencieBox from '../../../assets/images/divergencieBox.svg'
import Check from '../../../assets/images/check-circle.svg'
import Cancel from '../../../assets/images/cancel.svg'

import { Container } from './styles'

const DivergencieType = ({ type, valid }) => (
  <Container>
    <div>
      <img className="divergencieBox" alt="divergencie type" src={DivergencieBox} />
      <span className="divergencieType">
        {type && typeof type === 'string' ? type.substring(0, 1).toUpperCase() : <>&minus;</>}
      </span>
      <img className="divergencieValid" alt="validDivergencie" src={valid ? Cancel : Check} />
    </div>
  </Container>
)

export default DivergencieType
