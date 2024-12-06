const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  randomColorGenerator: false,
  showAccordian: false,
  showTreeView: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error occured, please try again");
  });
}

export default featureFlagsDataServiceCall;
