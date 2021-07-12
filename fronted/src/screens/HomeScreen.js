import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';
import {Card,CardImg, CardBody,CardText,CardTitle, CardDeck } from 'reactstrap';

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
        
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (
    <>
      {category && <h2>{category}</h2>}

      <br></br><br></br>
      <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <input
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </li>
        &ensp;&ensp;
        <li>
          Sort By{' '}
          <select name="sortOrder" onChange={sortHandler}>
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </li>
      </ul>
      
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className="products">
        {
          products.length === 0 ?
            <div style={{
              fontSize: '4rem',
              fontFamily: 'sans-serif',
              marginTop : '10%',
              
              
            }}>
              Oopppss.... 🙇 No such product found !!
          </div>
            :
          products.map((product) => (
            <li key={product._id}>
            <CardDeck>
            <Card style={{border:'1px solid #c0c0c0',borderRadius:'5%',padding:'13%',boxShadow: '20px 20px 30px -10px #192824'}}>
              <CardImg variant="top" src={product.image}  height="100px" width="170px"/>
              <CardBody>
                <CardTitle style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  fontFamily: "Candara",
                  color: 'Blue',
                  textAlign: "center",
                  paddingTop: "3px",
                }}><Link to={'/product/' + product._id}>{product.name}</Link></CardTitle>
                <CardText>
                  <div style={{
                  fontSize: 17,
                  
                  fontFamily: 'Comic Sans',
                  color: 'Black',
                  
                  paddingTop: "2px",
                  paddingLeft: "2px",
                  paddingBottom: "4px",
                }}>{product.brand}</div>
                          <div style={{
                  fontSize: 17,
                  
                  fontFamily: 'Comic Sans',
                  color: 'Black',
                  
                  paddingTop: "2px",
                  paddingLeft: "2px",
                  paddingBottom: "7px",
                }}>${product.price}</div>
                          <div >
                            <Rating
                              value={product.rating}
                              text={product.numReviews + ' reviews'}
                            />
                    </div>
                </CardText>
              </CardBody>
            </Card>
            </CardDeck>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default HomeScreen;
