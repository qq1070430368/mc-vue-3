
// 时间格式化
function padDate (va) {
  va = va < 10 ? '0' + va : va;
  return va;
}
const formatDate = function formatDate (val) {
  if (val === '') {
    return '';
  }
  var value = new Date(val);
  var year = value.getFullYear();
  var month = padDate(value.getMonth() + 1);
  var day = padDate(value.getDate());
  var hour = padDate(value.getHours());
  var minutes = padDate(value.getMinutes());
  var seconds = padDate(value.getSeconds());
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
};

export default {
  formatDate
};
