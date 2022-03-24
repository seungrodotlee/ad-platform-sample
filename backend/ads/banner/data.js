const enableWidthList = {
  inpage: [234, 468, 728, 930, 970],
};

const enableHeightList = {
  inpage: [60, 90, 180, 250],
};

const fetchBanner = (type, { w = 0, h = 0 }) => {
  const filtered = enableWidthList[type].filter((iw) => iw <= w);
  const adWidth = filtered[filtered.length - 1];
  const adHeight =
    enableHeightList[parseInt(Math.random() * enableInpageHeightList.length)];
};

module.exports = {
  fetchBanner,
};
