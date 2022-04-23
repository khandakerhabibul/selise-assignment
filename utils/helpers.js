export const isActivePath = (currentPath, pathName) => currentPath === pathName;

export const getData = () => {
  fetch('../product-list.json')
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
    });
};
