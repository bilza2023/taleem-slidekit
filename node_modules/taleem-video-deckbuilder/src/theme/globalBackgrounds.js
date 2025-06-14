



export function dotsBg (globalTheme) {
    return {
        backgroundColor: globalTheme.backgroundColor, // or any hex
        backgroundImage: null,
        backgroundImageOpacity: 1.0,
        pattern: {
          type: "dots",
          props: {
            color: "#ffffff",   // white dots
            opacity: 0.2,       // subtle
            spacing: 30,        // pixels between dots
            radius: 2           // small circle
          }
        }
    };
}
export function defaultBg (globalTheme) {
    return {
      backgroundColor: globalTheme.backgroundColor || "#000000", // fallback just in case
      backgroundImage: null,
      backgroundImageOpacity: 1.0,
      pattern: null
    };
}
export function gridBg(globalTheme) {
  return {
    backgroundColor: globalTheme.backgroundColor,
    backgroundImage: null,
    backgroundImageOpacity: 1.0,
    pattern: {
      type: "grid",
      props: {
        color: "#ffffff",    // line color
        opacity: 0.15,        // subtle overlay
        spacing: 40,          // distance between grid lines
        lineWidth: 1          // thin lines
      }
    }
  };
}


export function stripesBg(globalTheme) {
  return {
    backgroundColor: globalTheme.backgroundColor,
    backgroundImage: null,
    backgroundImageOpacity: 1.0,
    pattern: {
      type: "stripes",
      props: {
        color: "#ffffff",   // stripe color
        opacity: 0.05,       // very subtle
        thickness: 10,       // height of stripe
        gap: 20              // vertical gap between stripes
      }
    }
  };
}

export function wavesBg(globalTheme) {
  return {
    backgroundColor: globalTheme.backgroundColor,
    backgroundImage: null,
    backgroundImageOpacity: 1.0,
    pattern: {
      type: "waves",
      props: {
        color: "#ffffff",    // wave color
        opacity: 0.08,        // soft appearance
        amplitude: 10,        // wave height
        frequency: 0.05,      // wave tightness
        thickness: 2,         // line thickness
        gap: 50               // vertical distance between waves
      }
    }
  };
}
export function crosshatchBg(globalTheme) {
  return {
    backgroundColor: globalTheme.backgroundColor,
    backgroundImage: null,
    backgroundImageOpacity: 1.0,
    pattern: {
      type: "crosshatch",
      props: {
        color: "#ffffff",
        opacity: 0.1,
        spacing: 25,
        lineWidth: 1
      }
    }
  };
}
export function bricksBg(globalTheme) {
  return {
    backgroundColor: globalTheme.backgroundColor,
    backgroundImage: null,
    backgroundImageOpacity: 1.0,
    pattern: {
      type: "bricks",
      props: {
        color: "#ffffff",
        opacity: 0.07,
        brickWidth: 60,
        brickHeight: 30,
        gap: 4
      }
    }
  };
}

export function mosaicBg(globalTheme) {
  return {
    backgroundColor: globalTheme.backgroundColor,
    backgroundImage: null,
    backgroundImageOpacity: 1.0,
    pattern: {
      type: "mosaic",
      props: {
        color: "#ffffff",
        opacity: 0.06,
        minSize: 20,
        maxSize: 60,
        count: 100
      }
    }
  };
}

export function hexagonsBg(globalTheme) {
  return {
    backgroundColor: globalTheme.backgroundColor,
    backgroundImage: null,
    backgroundImageOpacity: 1.0,
    pattern: {
      type: "hexagons",
      props: {
        color: "#ffffff",
        opacity: 0.07,
        radius: 30,
        gap: 4
      }
    }
  };
}

export function tilesBg(globalTheme) {
  return {
    backgroundColor: globalTheme.backgroundColor,
    backgroundImage: null,
    backgroundImageOpacity: 1.0,
    pattern: {
      type: "tiles",
      props: {
        color: "#ffffff",
        opacity: 0.05,
        size: 50,
        gap: 5,
        rotate: false
      }
    }
  };
}


export const GlobalBackgrounds = {
    defaultBg,
    dotsBg,
    gridBg,
    stripesBg,
    wavesBg,
    crosshatchBg,
    bricksBg,
    tilesBg,
    hexagonsBg,
    mosaicBg
  };