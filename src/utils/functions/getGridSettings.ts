export const getGridSettings = (screenWidth: number) => {
   let widthGrid = 0;
   let columnCount = 4;
   let columnWidth = 260;
   let isMobileGridSettings = false;

   switch (true) {
      case screenWidth < 520:
         widthGrid = screenWidth - 20;
         columnCount = 1;
         columnWidth = 200;
         isMobileGridSettings = true;
         break;

      case screenWidth < 800:
         console.log('< 800');
         widthGrid = 540;
         columnCount = 2;
         break;
      case screenWidth >= 801 && screenWidth < 1080:
         console.log('> 800 && < 1080');
         widthGrid = 801;
         columnCount = 3;
         break;
      case screenWidth >= 1080:
         console.log('>= 1080');
         widthGrid = 1080;
         columnCount = 4;
         break;
      default:
         break;
   }

   return { widthGrid, columnCount, columnWidth, isMobileGridSettings };
};
