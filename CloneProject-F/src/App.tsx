import { useState } from 'react'
import './App.css'
import { CategoryPills } from './components/CategoryPills'
import { categories } from './data/home'
import PageHeader from './layouts/PageHeader'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])


  return (
    <div className='max-h-screen flex flex-col'>
      <PageHeader />
      <div className="grid flex-grow-1 overflow-auto" style={{ gridTemplateColumns: 'auto 1fr' }} >
        <div>Sidebar</div>
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky t-0 pb-4 z-10 bg-white">
            <CategoryPills categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory} />
          </div>
        </div>
        <div className="grid gap-4 gird-cols[repeat(auto-fill, minmax(300px, 1fr))]"></div>

      </div>
    </div>

  )
}

export default App
