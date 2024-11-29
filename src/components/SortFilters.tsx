import React from 'react';

interface SortFiltersProps{
    darkMode:boolean;
    sortByPrice: (flag: boolean) => void;
    sortByRating: () => void;
}

const SortFilters: React.FC<SortFiltersProps> = React.memo(({darkMode, sortByPrice, sortByRating}) => {
  return (
    <>
        <div className={`flex items-center gap-3 text-sm font-medium  ${darkMode ? 'text-white': 'text-gray-900' }`}>
            Price
            <label className="flex items-center space-x-2">
                <input
                type="radio"
                name="priceSort"
                value="lowToHigh"
                onClick={() => sortByPrice(true)}
                className={`h-4 w-4`}
                />
                <span className={`text-sm font-medium ${darkMode ? 'text-white': 'text-gray-900' }`}>Low to High</span>
            </label>
            <label className="flex items-center space-x-2">
                <input
                type="radio"
                name="priceSort"
                value="highToLow"
                onClick={() => sortByPrice(false)}
                className={`h-4 w-4 ${darkMode ? 'text-white': 'text-gray-900' }`}
                />
                <span className={`text-sm font-medium ${darkMode ? 'text-white': 'text-gray-900' }`}>High to Low</span>
            </label>
        </div>
        <div className={`flex items-center gap-3 text-sm font-medium  ${darkMode ? 'text-white': 'text-gray-900' }`}>
            Rating
            <label className="flex items-center space-x-2">
                <input
                type="radio"
                name="priceSort"
                value="highToLow"
                onClick={() => sortByRating()}
                className={`h-4 w-4 ${darkMode ? 'text-white': 'text-gray-900' }`}
                />
                <span className={`text-sm font-medium ${darkMode ? 'text-white': 'text-gray-900' }`}>Top rated</span>
            </label>
        </div>
    </>
  )
})

export default SortFilters