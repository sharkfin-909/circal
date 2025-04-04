export default defineAppConfig({
  ui: {
    colors: {
      primary: 'stone',
      secondary: 'blue',
      success: 'green',
      neutral: "stone",
      warning:'red'
    },
   card:{
    slots: {
      root: 'rounded-[calc(var(--ui-radius)*2)]',
      header: 'p-2 sm:px-6',
      body: 'p-2 sm:p-6',
      footer: 'p-2 sm:px-6'
    },
   } ,
   
  }
})