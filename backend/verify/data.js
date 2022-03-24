const idList = ["123456"];

const verifyId = (id) => {
  return new Promise(async (resolve, reject) => {
    resolve(idList.includes(id));
  });
};

module.exports = {
  verifyId,
};
