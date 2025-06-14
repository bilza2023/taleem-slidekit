
import { DeckBuilder, GobalThemes,GlobalBackgrounds } from "taleem-video-deckbuilder";
import { quoteSlide } from "./slidePresets/quoteSlide.js";


//////=====SETUP====////////////////////////////////////////////
const theme = GobalThemes.royalBlue;

const deck = new DeckBuilder();
deck.setGlobalBackground(GlobalBackgrounds.dotsBg(theme) );
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
const data = {
    lines: [
      "Education Is The Passport",
      "To The Future,",
      "For Tomorrow Belongs To Those Who Prepare For It Today."
    ],
    author: "— Malcolm X"
  };
  
quoteSlide(data,theme,deck);

//////////////////////////////////////////////////////

export const presentationData = deck.build();
