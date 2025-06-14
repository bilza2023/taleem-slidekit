// index.js (root)
import { createKit } from "./slideKit/createKit.js";

// ✅ Configure defaults using string keys
createKit.setTheme("neonDark");
createKit.setPattern("dots");
createKit.setBgImage("rocketTakeoff");
createKit.setBgOpacity(0.2);

// ✅ Create slideKit instance
const kit = createKit.create();

// ✅ Optional background-only slide (FIRST)
// kit.setSlideBackground(6, {
//   backgroundColor: "#001f3f",
//   backgroundImage: "physicsForce",
//   backgroundImageOpacity: 0.25,
//   pattern: { type: "bricks", props: { color: "#ffffff", opacity: 0.07 } }
// });


// ✅ Slide 1 — starts at 6, ends at 14
kit.add("titleAndImageSlide", 10, {
  title: "The Future Awaits",
  image: { src: "rocketTakeoff" }
}, {
  showAt: [2]
});
// debugger;
// ✅ Slide 2 — starts at 14, ends at 24
kit.add("imageLeftBulletsRight", 20, {
  image: { src: "rocketTakeoff" },
  bullets: [
    "Thrust control",
    "Stability systems",
    "Escape velocity achieved"
  ]
}, {
  showAt: [10, 11, 12, 13]
});

// ✅ Build and output
const presentationData = kit.build();
console.log(JSON.stringify(presentationData, null, 2));
