import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/async/fetchData";
import { AppDispatch } from "../redux";

const Categories: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: any) => state.fetch.categories);
  const loading = useSelector((state: any) => state.fetch.loading);
  const error = useSelector((state: any) => state.fetch.error);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  if (error) {
    return <div className="flex flex-col justify-center items-center w-full text-black/[.5]">
      <p className="text-2xl font-semibold">Oops, something went wrong!</p>
      <p>{error}</p>
    </div>
  }

  return (
    <div className="flex lg:flex-row flex-col justify-center h-full lg:ml-32 ml-6 py-16">
        <div className="flex lg:flex-col justify-between lg:items-start items-end min-w-64 py-8 mr-8 gap-6">
            <h2 className="text-4xl font-semibold max-w-44">New In Store Now</h2>
            <div className="flex justify-center flex-col gap-12">
                <p>Get the latest items immediately with promo prices</p>
                <a className="underline lg:flex hidden">Check All<i className="bi bi-arrow-right text-lg ml-2"></i></a>
            </div>
        </div>
        <div className="flex gap-2 overflow-x-auto overflow-y-hidden category">
            {categories.map((category: any, index: number) => (
              <div key={index} className="flex">
              {loading ? (
                <div className="rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-96 w-64 bg-slate-300 rounded"></div>
                  </div>
                </div>
              </div>
              ) : (
                <div className="group relative min-w-64 rounded-md overflow-hidden mx-2">
                    <img src={category.image} alt={category.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-200" />
                    <p className="absolute bottom-4 flex justify-center items-center w-full text-3xl text-white font-semibold">{category.title}</p>
                </div>
                )}
              </div>
            ))}
        </div>
    </div>
  )
};

export default Categories;
