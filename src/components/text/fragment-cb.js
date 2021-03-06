import React from 'react'
import Fragment from '../common/fragment'


function FragmentCB(props) {
  return (
    <Fragment pos="bbb" {...props}>
      <p>
El que agoniza, muere. El que muere, tal vez resucite. Pero en ese orden: 1, 2, 3.
Hay muertes sin agonías, pero no resurrecciones sin muerte. Existen agonías largas y otras cortas. Existen muertes repentinas. ¿Habrá resurrecciones sorpresivas e
inesperadas?
      </p>
    </Fragment>
  )
}


export default FragmentCB
