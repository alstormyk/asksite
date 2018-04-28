---
title: How I chose my color scheme.
description: Searching, mixing, matching and all the pain to discover the askcreative color palette.
keywords: "Color, Web Design, Design"
image: https://res.cloudinary.com/askcreative-space/image/upload/v1520607421/webpostpallette_t3hzxj.png
date: 2018-03-10 12:00:00
categories:
- webdesign
- design
tags:
- colors
- design
---
# How I chose a Color Palatte / Color Scheme

Environmental concerns are a core value of my company. So my website should feature green? I went to [Awwwards](https://www.awwwards.com) and began my search for inspiration. I don't care much for green. Maybe my favorite colors. Grey and lavender. I envisioned my website to be pretty and energetic. I want my brand to feel mature and natural. These were some of my favorite sites and their colors.  

## Finding Inspiration

### [Envy Labs](https://envylabs.com)
![](https://res.cloudinary.com/askcreative-space/image/upload/v1524385718/envy_zwi3hg.png)

### [Color Theory](http://www.colortheory.ca)
![Screenshot of website](https://res.cloudinary.com/askcreative-space/image/upload/c_scale,w_850/v1520607429/Screenshot-2018-3-9_Color_Theory_gltixa.jpg)
 
### [Wijn Doekje](http://www.wijndoekje.nl)
![Screenshot of website](https://res.cloudinary.com/askcreative-space/image/upload/c_scale,w_850/v1520607467/Screenshot-2018-3-9_Wijndoekje_-_Voor_een_lach_zonder_wijnaanslag_clseiq.png)

### [Le Col de Claudine](http://www.lecoldeclaudine.com/fr)
![Screenshot of website](https://res.cloudinary.com/askcreative-space/image/upload/c_scale,w_850/v1520607455/Screenshot-2018-3-9_Le_Col_de_Claudine_-_Home_qhxpj1.jpg)

### [Living Form](http://living-form.com)
![Screenshot of website](https://res.cloudinary.com/askcreative-space/image/upload/c_scale,w_850/v1520607448/Screenshot-2018-3-9_Home_Living_Form_sgsj2c.png)

### [October](https://oct.co/essays)
![Screenshot of website](https://res.cloudinary.com/askcreative-space/image/upload/c_scale,w_850/v1520607440/Screenshot-2018-3-9_Essays_on_Beer_qu0w9s.jpg)
 
### [NJI3](https://nji3.com/ivana-pi)
![](https://res.cloudinary.com/askcreative-space/image/upload/v1524385713/nji3_psosst.png)
  
### [Bashful Creative Agency](http://bashful.com/au)
![](https://res.cloudinary.com/askcreative-space/image/upload/v1524385708/bashful_riakvu.png)
  
I loved the dark backgrounds. Especially the dark browns. Color theory in web design says to avoid too much black and white. They're too harsh. #1D1D1D instead of #000. Pink looks good with brown, but so does blue. Blue felt a bit boring. It didn't excite me. I wanted something more vibrant. Reds are vibrant but too urgent. I put to work some of my favorite color scheme tools.

### Mix and Match

What it all came down to is I really liked the pinks with the dark browns. Time for some mixing and matching with

#### [Coolors](https://coolors.co)

#### [Paletton](http://paletton.com)

Then a bit of grey and voila.

```css
:root {
--color-pink: #AC3B61;
--color-powder: #FEFCFB;
--color-grey1: #D9D5D6;
--color-grey2: #BAB2B5;
--color-font: #413E3C;
}
```

There are always some standard website colors. Success, Warning, Danger, etc. and with the help of [Cohesive Colors](http://javier.xyz/cohesive-colors/) behold.

```css
:root {
--color-blue: #336CA4;
--color-green: #3E9523;
--color-ruby: #8C0C23;
--color-orange: #F54002
}
```

I used the above colors and tools to make up some lighter and darker colors if the need arises.

```css
:root {
--color-lighter-blue: #7DA9D3;
--color-light-blue: #5186B9;
--color-blue: #336CA4;
--color-dark-blue: #155A9C;
--color-darker-blue: #0D4276;
--color-lighter-green: #84d063;
--color-light-green: #5AAE3F;
--color-green: #3E9523;
--color-dark-green: #26780C;
--color-darker-green: #145400;
--color-lighter-pink: #E797B2;
--color-light-pink:#CD6387;
--color-pink: #AC3B61;
--color-dark-pink: #912046;
--color-darker-pink: #6C0729;
--color-light-ruby: #C6455C;
--color-lighter-ruby: #AA233B;
--color-ruby: #8C0C23;
--color-dark-ruby: #690013;
--color-darker-ruby: #42000C;
--color-lighter-orange: #FF8A62;
--color-light-orange: #FF6A37;
--color-orange: #F54002;
--color-dark-orange: #C13100;
--color-darker-orange: #972700;
--color-powder: #FEFCFB;
--color-lighter-grey: #F6F6F6;  
--color-light-grey: #F2F1F1;  
--color-grey1: #D9D5D6;  
--color-grey2: #BAB2B5;  
--color-dark-grey: #998C91;  
--color-darker-grey: #7B686F;  
--color-lighter-font: #AAA39D;  
--color-light-font: #78726F;  
--color-font: #413E3C;  
--color-dark-font: #171412;  
--color-darker-font: #1D150F;  
}
```