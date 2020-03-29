import data from '../data/db.json';

import * as _ from "lodash";

const db = require('../data/db.json');

export const showData = (index) => {
  console.info(data)
  return data[0];
};

//functions

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


export const getNameFromCategory = (category) => {
  const list = []
  db.forEach(element => {
    if(element.category == undefined) {
      element.category = 'without category';
      console.info('category: ', element.category)
    }
    if(element.category == category) {
      list.push({name: element.name, ibu: element.ibu, country: element.country});
    }
  });
  return list;
}

export const getInfoFromName = (name) => {
  const list = []
  db.forEach(element => {
    if(element.name == name) {
      list.push({
        ibu: element.ibu, 
        country: element.country,
        category: element.category,
        city: element.city,
        site: element.site,
        description: element.description,

      });
    }
  });
  return list;
}

export const getCategories = () => {
  return _.map(_.groupBy(data, "category"), (o, idx) => {
    if(o[0].category === undefined){
      o[0].category = 'Without category';
    }
    return {
      category: o[0].category,
    }
  });
};