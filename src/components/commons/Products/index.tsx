import React,{useState} from "react"
import logo from "../../../../src/logo.svg"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import  "./styles.css"
import { Product } from "../../../types" 
import type { RootState } from '../../../redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from "../../../redux/app";

const Products = () => {
	const [isModalVisible,setIsModalVisible]=useState(false);


  const toggleIsModalVisible = () => {
    setIsModalVisible(isModalVisible);
  };
  const productData = useSelector((state: RootState) => state.counter.value)
	return (
		<div className="cardMain">
			{productData.map((item, index) => (
				<ProductBlock name={item.name} image={item.image} category={item.category} brand={item.brand} size={item.size} price={item.price} year={item.year}/>
			))}
						<Modal className="card" title="Basic Modal" visible={isModalVisible} onOk={toggleIsModalVisible} onCancel={toggleIsModalVisible}>
				<p style={{background: 'black'}}>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</div>
	)
}

export const ProductBlock: React.FC<Product> = ({name, image, category, brand, size, price, year}) => {
	const [isModalVisible,setIsModalVisible]=useState(false);
  
	const dispatch = useDispatch()
	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	const toggleIsModalVisible = () => {
		console.log("toggleIsModalVisible" , isModalVisible)
		setIsModalVisible(true);
	};
	const deleteProductAction = (name:string) => {
		dispatch(deleteProduct(name))
	}
	return (
		<>
			<div className="card" style={{width: '18rem',background:'white',color:'black'}}>
				{/* network image for ecomerce */}
				<img src={logo} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">Brand: {brand}</p>
					<p className="card-text">Category: {category}</p>
					<p className="card-text">Year: {year}</p>
					<p className="card-text">Price: {price}</p>
					<p className="card-text">Size: {size}</p>
					<button className="btn btn-primary" onClick={() => deleteProductAction(name)}>Delete</button>
					<button className="btn btn-primary" onClick={handleShow}>View</button>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>{name}</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<p>Brand: {brand}</p>
							<p>Category: {category}</p>
							<p>Year: {year}</p>
							<p>Price: {price}</p>
							<p>Size: {size}</p>				
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>

				</div>
			</div>
		</>
	)
}

export default Products
