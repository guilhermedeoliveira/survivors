export const getCoordsFromString = (stringToCoords) => {
  const coordRegex = /[-]{0,1}[\d.]*[\d]+/g;
  return stringToCoords && stringToCoords.match(coordRegex)
                  .map(Number);
}