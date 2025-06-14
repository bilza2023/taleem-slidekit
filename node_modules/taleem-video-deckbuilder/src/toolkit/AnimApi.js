// AnimApi.js

/**
 * AnimApi
 *
 * A lightweight helper for attaching animation specs to an item's `animations` array.
 * This does not run animations—your separate engine should consume `item.animations`.
 */
const AnimApi = {
  /**
   * Queue a generic tween on the item.
   * @param {object} item      - The item to animate (will get an `animations` array)
   * @param {string} field     - The numeric field name to tween (e.g., "x", "alpha")
   * @param {number} from      - Starting value
   * @param {number} to        - Ending value
   * @param {number} start     - Time (s) to begin
   * @param {number} end       - Time (s) to end
   * @param {string} easing    - Easing name or enum (e.g., "linear", "easeOut")
   */
  animate(item, field, from, to, start, end, easing = "linear") {
    item.animations = item.animations || [];
    item.animations.push({
      type: "tween",
      field,
      from,
      to,
      start,
      end,
      easing
    });
  },

  /**
   * Queue an instantaneous set at a specific time.
   * @param {object} item      - The item to modify
   * @param {string} field     - The field to set
   * @param {number} value     - Value to assign
   * @param {number} at        - Time (s) when to apply
   */
  set(item, field, value, at) {
    item.animations = item.animations || [];
    item.animations.push({
      type: "set",
      field,
      value,
      time: at
    });
  },

};

export default AnimApi;
