import React, { FC } from 'react';
import { Box } from '@mui/material';

import SubTitle from '../../typography/subTitle/SubTitle';
import Text from '../../typography/text/Text';

import type { ListItemProps } from './type';

const styleListItem = {
   padding: '10px 16px',
   borderBottom: '1px solid #21212114',
   display: 'flex',
   flexDirection: 'column',
};

const ListItem: FC<ListItemProps> = ({ title, text }) => {
   return (
      <Box sx={styleListItem} component="li">
         <SubTitle>{title}</SubTitle>
         <Text>{text}</Text>
      </Box>
   );
};

export default ListItem;
