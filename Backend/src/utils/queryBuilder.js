const defaultParams = {
  search: "", //--> search box
  sortField: "", //--> sort column name
  order: "", // ||ASC //--> order by
  filterField: '', //--> filter column
  filterValue: '', //--> filter value
  page: '', //--> page number
 limit: '', //--> record limit per page
};

const queryBuilder = (data) => {
  //console.log(data , "search")
  const query = {};
  data.search !== undefined &&  data.search !== ''
    ? (query.search = data.search
    )
    : (query.search = defaultParams.search
       );
  data.order !== undefined
    ? ((query.order = data.order), (query.sortField = data.sortField))
    : ((query.order = defaultParams.order),
      (query.sortField = defaultParams.sortField));
  data.filterField !== undefined &&  data.filterField !==''
    ? (query.filterField = data.filterField)
    : (query.filterField = defaultParams.filterField);
  data.filterValue !== "" && data.filterValue !== undefined
    ? (query.filterValue = data.filterValue)
    : (query.filterValue = defaultParams.filterValue);
  data.page !== ""
    ? (query.offset = (data.page - 1) * parseInt(data.limit))
    : (query.offset = "");
  data.limit !== "" ? (query.limit = parseInt(data.limit)) : (query.page = "");
  return query;
};

export {queryBuilder};
