Here is some clerification

1: Deck does not need theme at all (check if there is some internal use of theme in deck builder) ??? . we give it theme since in past inside deckbuilder we were adding theme to items which we are not doing now ...CORRECT???/

2: the globalBeckground is just in deckbuilder to inject it into every slide ... if some slide want to add its own backgroud it does so 
it can have its own theme as 
const background = GlobalBackgrounds.bricksBg(theme);
use...by slide

..next slide if does not want re adjest
const background = GlobalBackgrounds.bricksBg(theme);


so slide add must do these 2

if (!this.globalBackground) { //not sure about !this.globalTheme || 
throw new Error('DeckBuilder: theme or background not set');
}

const background = cloneBackground(this.globalBackground);
this.slides.push({ background, items: allItems, startTime, endTime });
