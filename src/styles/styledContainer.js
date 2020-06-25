import styled from 'styled-components';
import { Card } from 'antd';

import { container } from './mixins';
import styledSystem from './styledSystem';

const ContainerWrap = styledSystem(styled(Card)`
  /* ${container.centerBox} */
  /* padding: 32px; */
`);

export default ContainerWrap;
