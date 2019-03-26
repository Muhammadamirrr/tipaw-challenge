import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'

import { TaglineContainer } from './tagline.styles'

const Tagline = () => (
  <TaglineContainer>
    <FontAwesomeIcon icon={faAward} className={'fa-lg icon'} />
    <p>
      Tipaw is opgenomen in de lijst van gespecialiseerde media van de dienst Dierenwelzijn
    </p>
  </TaglineContainer>
)

export default Tagline
