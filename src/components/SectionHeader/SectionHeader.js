import './SectionHeader.css'

import { Container,Team} from '../../components/index';

const SectionHeader = (props) => {
  return (
    <div className='section-header'>
      
    <h4>{props.children}</h4>
</div>
  )
}

export default SectionHeader