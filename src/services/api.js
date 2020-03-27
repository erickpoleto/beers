import data from '../data/db.json';

import * as _ from "lodash";

export const showData = (index) => {
  console.info(data)
  return data[0];
};

//pagination country

export const getCountry = (index) => {

  return _.groupBy(data, "country");
};

//pagination
export const getPaginatedItems = (items, page, pageSize) => {
  console.info('items: ', items);
  var pg = page || 1,
    pgSize = pageSize || 100,
    offset = (pg - 1) * pgSize,
    pagedItems = _.drop(items, offset).slice(0, pgSize);

  return {
    page: pg,
    pageSize: pgSize,
    total: items.length,
    total_pages: Math.ceil(items.length / pgSize),
    data: pagedItems
  };
}

export const getCategories = () => {
  return _.map(_.groupBy(data, "category"), (o, idx) => {
    return {
      category: o[0].category,
    }
  });
};


