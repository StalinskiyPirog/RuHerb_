export default function FilterBlock(){
    return(
        <div className="lg:sticky lg:top-4">
        <details
          open={true}
          className="overflow-hidden border border-gray-200 rounded"
        >
          <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
            <span className="text-sm font-medium">Включить фильтр</span>
  
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>
          
          <form
            
            id="form_"
            className="border-t border-gray-200 lg:border-t-0"
          >
            <fieldset>
              <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              </legend>
            </fieldset>
            <fieldset>
              <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                Категории
              </legend>
  
              <div className="px-5 py-6 space-y-4">
                <div className="flex items-center">
                  <input
                    id="vitamins"
                    type="checkbox"
                    
                    
                    className="w-5 h-5 border-gray-300 rounded"
                  />
  
                  <label
                    htmlFor="vitamins"
                    className="ml-3 text-sm font-medium"
                  >
                    Витамины
                  </label>
                </div>
               
                <div className="flex items-center">
                  <input
                    id="bio"
                    type="checkbox"
                    
                    
                    
                    className="w-5 h-5 border-gray-300 rounded"
                  />
  
                  <label
                    htmlFor="bio"
                    className="ml-3 text-sm font-medium"
                  >
                    Биодобавки
                  </label>
                </div>
              
           
                <div className="flex items-center">
                  <input
                    id="drugs"
                    type="checkbox"
                    
                    className="w-5 h-5 border-gray-300 rounded"
                    
                    
                  />
  
                  <label
                    htmlFor="drugs"
                    className="ml-3 text-sm font-medium"
                  >
                    Лекарства
                  </label>
                </div>
               
     
                <div className="flex items-center">
                  <input
                    id="travy"
                    type="checkbox"
                    
                    
                    
                    className="w-5 h-5 border-gray-300 rounded"
                  />
  
                  <label
                    htmlFor="travy"
                    className="ml-3 text-sm font-medium"
                  >
                    Лечебные травы
                  </label>
                </div>
              
           
                <div className="flex items-center">
                  <input
                    id="tea"
                    type="checkbox"
                    
                    
                    
                    className="w-5 h-5 border-gray-300 rounded"
                  />
  
                  <label
                    htmlFor="tea"
                    className="ml-3 text-sm font-medium"
                  >
                    Чаи
                  </label>
                </div>
                
              
                <div className="flex items-center">
                  <input
                    id="fruits"
                    type="checkbox"
                    
                    
                    
                    className="w-5 h-5 border-gray-300 rounded"
                  />
  
                  <label
                    htmlFor="fruits"
                    className="ml-3 text-sm font-medium"
                  >
                    Фрукты
                  </label>
                </div>
               
                <div className="flex items-center">
                  <input
                    id="cereals"
                    type="checkbox"
                    
                    
                    
                    className="w-5 h-5 border-gray-300 rounded"
                  />
  
                  <label
                    htmlFor="cereals"
                    className="ml-3 text-sm font-medium"
                  >
                    Злаки
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="drinks"
                    type="checkbox"
                    
                    
                    
                    className="w-5 h-5 border-gray-300 rounded"
                  />
  
                  <label
                    htmlFor="drinks"
                    className="ml-3 text-sm font-medium"
                  >
                    Напитки
                  </label>
                </div>
  
                
              </div>
            </fieldset>
  
            
          
  
            <div className="flex justify-between px-5 py-3 border-t border-gray-200">
              <button
                type="button"
                
                className="text-xs font-medium text-gray-600 underline rounded"
              >
                Сбросить
              </button>
  
              <button
                type="submit"
                className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
              >
                Применить
              </button>
            </div>
          </form>
        </details>
      </div>
    );
}