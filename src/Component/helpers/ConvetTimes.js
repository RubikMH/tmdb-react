function ConvertTimes(times = 0) {
  let mint = times % 60;
  let hors = times / 60;
  let result = ` ${Math.floor(hors)}h : ${mint}m`;
  return result;
}
export default ConvertTimes;
