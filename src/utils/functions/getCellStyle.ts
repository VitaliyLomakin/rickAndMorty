export const getCellStyle = (columnCount, style) => {
    const cellStyle = {
       ...style,
       padding: '10px',
       boxSizing: 'border-box',
       width: '100%',
    };
 
    if (columnCount === 1) {
       cellStyle.display = 'flex';
       cellStyle.justifyContent = 'center';
       cellStyle.alignItems = 'center';
    }
 
    return cellStyle;
 };