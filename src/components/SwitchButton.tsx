import React from 'react';

interface SwitchButtonProps {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const SwitchButton:React.FC<SwitchButtonProps> = React.memo(({setDarkMode}) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(e.target.checked);
  };

  return (
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" onChange={handleChange} className="sr-only peer"/>
          <div className="relative w-12 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-gray-700 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white peer-checked:after:bg-gray-700"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-400">Dark Mode</span>
        </label>
  );
});

export default SwitchButton;
