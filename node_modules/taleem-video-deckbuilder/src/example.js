import { DeckBuilder } from "./deckBuilder/deckBuilder.js";
import * as ItemBuilders from "./items/ItemBuilders.js";
import * as GlobalThemes  from "./theme/globalThemes.js";
import * as GlobalBackgrounds  from "./theme/globalBackgrounds.js";

// Create deck
const deck = new DeckBuilder();

// Set global background (light yellow)
deck.setGlobalBackground({
  backgroundColor: "#fffbe6",
  backgroundImage: null,
  backgroundImageOpacity: 1,
  pattern: null
});

// Add slide from 0s to 6s
const slide = deck.addSlide(6);

// Add a text item with position
slide.addItem(
  ItemBuilders.text("Hello Taleem!", {
    x: 100,
    y: 150,
    fontSize: 42,
    color: 0x333333,
    showAt: 0
  })
);

// Export deck
const json = deck.build();
console.log(JSON.stringify(json, null, 2));
