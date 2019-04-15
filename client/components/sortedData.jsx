import Data from "../../Data";

const sortedData = Data.projects.slice(0);
sortedData.sort(function(a, b) {
  return b.added - a.added;
});
export default sortedData;
