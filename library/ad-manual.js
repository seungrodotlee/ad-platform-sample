const TonaAd =
  window.TonaAd ||
  function (key) {
    const fetch = {
      apiURL: "http://localhost:3050/api",
      get(url) {
        return new Promise((resolve, reject) => {
          const request = new XMLHttpRequest();

          if (!request) {
            reject(new Error("Error while making XMLHttpRequest Instance!"));
            return;
          }

          request.onreadystatechange = () => {
            if (request.readyState === XMLHttpRequest.DONE) {
              if (request.status === 200) {
                resolve({
                  status: request.status,
                  data: JSON.parse(request.response),
                });
              } else {
                reject(new Error(`Invalid Request to: ${this.apiURL}${url}`));
              }
            }
          };

          request.open("GET", `${this.apiURL}${url}`);
          request.send();
        });
      },
    };

    this.key = key;

    this.initAutoAds = async function () {
      const verifyResult = await fetch.get(`/verify/${this.key}`);
      console.log(verifyResult);
    };
  };

new TonaAd("123456").initAutoAds();
