const KEYS = "asdfjkl;";

/**
 * Generate random key sequence for typing practice
 * @param {number} length - number of keys to generate
 * @returns {string[]}
 */
export const generateKeys = (length = 50) => {
  return Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * KEYS.length);
    return KEYS[randomIndex];
  });
};

/**
 * Generate grouped keys (optional for better UX)
 * Example: "asdf jkl;"
 */
export const generateGroupedKeys = (groups = 5, groupSize = 4) => {
  const result = [];

  for (let i = 0; i < groups; i++) {
    let group = "";
    for (let j = 0; j < groupSize; j++) {
      group += KEYS[Math.floor(Math.random() * KEYS.length)];
    }
    result.push(group);
  }

  return result;
};
