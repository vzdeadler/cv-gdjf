import './Icon.scss';
import { IconBaseProps, IconType } from 'react-icons';

/**
 *
 */
const Icon = (props: IconBaseProps, IconType: IconType): JSX.Element => {
  
  return <IconType {...props} stroke="currentColor" />

};

export default Icon;