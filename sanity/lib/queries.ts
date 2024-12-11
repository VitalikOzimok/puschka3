import { defineQuery } from "next-sanity";
export const STURTUP_QUERY =
  defineQuery(`*[_type =='sturtup'&& defined(slug.current) &&!defined($search)|| title match $search || category match $search ]|  order(_createAt desc){
    _id,
      title,
      slug,
      
      author ->{
        _id,name,image,bio
      },
      views,description,category,image,price,old_price
  }
  `);
export const STARTUP_BY_ID_QUERY =
  defineQuery(`*[_type =='sturtup' &&  _id==$id][0] {
    _id,
      title,
      slug,
      
      author ->{
        _id,name,image,bio
      },
      views,description,category,image,price,old_price
  }`);
