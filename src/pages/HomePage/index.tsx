import Product from "../../components/commons/Products"
import './style.css';
import { useDispatch } from 'react-redux'
import { searchProduct, filterProductByCategory, filterProductByYear, reset } from '../../redux/app';
import { productData } from '../../content'

export function HomePage() {
  const categories = productData.map((item) => item.category).filter((item, index, self) => self.indexOf(item) === index);
  const years = productData.map((item) => item.year).filter((item, index, self) => self.indexOf(item) === index);

  const dispatch = useDispatch()

  const onChange = (name: string) => {
    dispatch(searchProduct(name))
  }

  const onCategoryChange = (checked: boolean, category: any) => {
    checked? dispatch(filterProductByCategory(category)): dispatch(reset())
  }

  const onYearChange = (checked: boolean, year: string) => {
    checked? dispatch(filterProductByYear(year)): dispatch(reset())
  }

  return (
    <>
      <div className='homePageMain'>
        <div className='sidebarMain'>
          <div className='sidebarInner'>
            <div>
              <h3>Categories</h3>
              {categories.map((item, index) => (
                <div className='category' key={index}>
                  <input type='checkbox' value={item} onChange={(ev) => onCategoryChange(ev.target.checked, item)}/>
                  <span  className='checkTxt'>{item}</span>
                </div>
              ))}
            </div>

            <div>
              <h3>Years</h3>
              {years.map((item, index) => (
                <div className='years' key={index}>
                  <input type='checkbox' value={item} onChange={(ev) => onYearChange(ev.target.checked, item)}/>
                  <span  className='checkTxt'>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='pageMain'>
          <div className='serachMain'>
            <input className='inputFild' type="text" placeholder="Search" onChange={(ev) => onChange(ev.target.value)} />
          </div>
          <Product />
        </div>
      </div>
    </>
  );
}
