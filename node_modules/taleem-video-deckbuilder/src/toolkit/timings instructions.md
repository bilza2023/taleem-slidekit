# Timings Instructions:

- The way timings work in these presentations is that these are hard-coded timings in seconds since the presentation has to be in sync with a narration sound file.

- Each slide just needs its endTime since it startTime is the end time of the previous slide
- The start time of the first slide is internally always zero.
- We just add end time to a slide and thats all -
- any slide must not end AFTER the slide before it - for example if a slide 1 endTime = 10 the slide 2 endTime can not be 3 it has to be bigger than 10. atleast by 2 seconds.

## For example

In this example the slide end time = 5 so the time in showAt has to be less then 5 or they will not show ---> hence showAt: 1 and showAt: 2

Also if the showAt time is out of the start end window of this slide these items will not show

- they do not give error just dont show

```javascript
deck.addHeader("header", [{ text: "Chapter 1" }]);
deck.full(5, "barchart", [
  { label: "Math", value: 90, showAt: 1, color: "red" },
  { label: "Science", value: 75, showAt: 2, color: "green" },
]);
```

