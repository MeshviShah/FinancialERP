const defaultParams = {
  search: "", //--> search box
  sortField: "createdAt", //--> sort column name
  order: "DESC", // ||ASC //--> order by
  filterField: "", //--> filter column
  filterValue: "", //--> filter value
  // page: '', //--> page number
  // limit: '', //--> record limit per page
};

const queryBuilder = (data) => {
  const query = {};
  data.search !== ""
    ? (query.search = data.search
        .replaceAll(`\\`, `\\\\`)
        .replaceAll(`%`, `\\%`)
        .replaceAll(`'`, `''`))
    : (query.search = defaultParams.search
        .replaceAll("\\", "\\\\")
        .replaceAll("%", "\\%")
        .replaceAll(`'`, `''`));
  data.order !== ""
    ? ((query.order = data.order), (query.sortField = data.sortField))
    : ((query.order = defaultParams.order),
      (query.sortField = defaultParams.sortField));
  data.filterField !== ""
    ? (query.filterField = data.filterField)
    : (query.filterField = defaultParams.filterField);
  data.filterValue !== ""
    ? (query.filterValue = data.filterValue)
    : (query.filterValue = defaultParams.filterValue);
  data.page !== ""
    ? (query.offset = (data.page - 1) * parseInt(data.limit))
    : (query.offset = "");
  data.limit !== "" ? (query.limit = parseInt(data.limit)) : (query.page = "");
  return query;
};

module.exports = queryBuilder;
