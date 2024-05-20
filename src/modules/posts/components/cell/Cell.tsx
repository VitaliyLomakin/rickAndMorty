import React from 'react';
import CharactersCard from '../../../../ui/cards/charactersCard/charactersCard';

import { getCellStyle } from '../../../../utils/functions/getCellStyle';

export const Cell = ({ columnIndex, rowIndex, style, columnCount, data }) => {
    const itemIndex = rowIndex * columnCount + columnIndex;
    const item = data[itemIndex];

    const cellStyle = getCellStyle(columnCount, style)

    return (
       <div style={cellStyle}>
          {item ? (
             <CharactersCard
                id={item.id}
                style={style}
                species={item.species}
                name={item.name}
                image={item.image}
             />
          ) : (
             'Loading...'
          )}
       </div>
    );
 };