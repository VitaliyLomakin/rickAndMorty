import { FC } from 'react';

import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SubTitle from '../../typography/subTitle/SubTitle';
import Text from '../../typography/text/Text';
import DesctiptionText from '../../typography/desctiptionText/DesctiptionText';
import IconButton from '@mui/material/IconButton';

import type { ListItemLinkProps } from './type';

const styleListItemlink = {
   width: '100%',
   padding: '10px 16px',
   borderBottom: '1px solid #21212114',
   display: 'flex',
   flexDirection: 'column',
   position: 'relative',
};
const styleListItemArrow = {
   position: 'absolute',
   right: '0',
   top: '30%',
   width: '7px',
   height: '12px',
};

const ListItemLink: FC<ListItemLinkProps> = ({
   urlId,
   text,
   title,
   desc,
   url,
}) => {
   return (
      <Box sx={styleListItemlink} component={Link} to={`${url}${urlId}`}>
         <SubTitle>{title}</SubTitle>
         <Text>{text}</Text>
         {desc && <DesctiptionText>{desc}</DesctiptionText>}
         <IconButton sx={styleListItemArrow}>
            <img src="/image/arrow_link.svg" alt="arrow right" />
         </IconButton>
      </Box>
   );
};

export default ListItemLink;
