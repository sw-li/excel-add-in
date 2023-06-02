# Revisited Excel add-in
It's a inital test on office add-in with react front initiated with Yeoman generator. 


## Main modifications
---
1. dpated to my personal preferences on files organization. 

    * components folder stay unchanged

    * added new pages folder for multiple tools to live on a single add-on in form of web tabs

    * added utils folder for all function that interate with Excel context

    * App.js moved out of the components folder


2. css-loader included in package and intergrated in webpackage rules. 
3. bootstrap set and the public css imported in IndividualPage.css file for a fast personalization. 
    * in every IndividualPages.css file import the bootstraps.css
    
      ```@import "bootstrap/dist/css/bootstrap.min.css"``` 
    * then the personalization is made in every IndividualPage.css file. 
    * Finally, the IndividualPage.css is imported in IndividualPage.js using:
      
      ```import "./IndividualPage.css"```. 


