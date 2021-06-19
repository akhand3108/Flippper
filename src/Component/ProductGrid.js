import { useEffect, useState } from "react"
import { Button,Col, ButtonGroup, Container, Row } from "react-bootstrap"
import dataStore from "../dataStore/data.json"
import ProductCard from "./ProductCard"
import { DropdownButton,Dropdown} from "react-bootstrap"


function lowToHigh(a, b){
    if(a.price < b.price){
            return -1;
    // a should come after b in the sorted order
    }else if(a.price > b.price){
            return 1;
    // and and b are the same
    }else{
            return 0;
    }
}


function highToLow(a, b){
    if(a.price < b.price){
        return 1;
// a should come after b in the sorted order
}else if(a.price > b.price){
        return -1;
// and and b are the same
}else{
        return 0;
}
}

const ProductGrid = ()=>{
    const [sortType,setSortType] = useState("pop")
    const [products,setProducts] = useState(dataStore)
    const [size,setSize] = useState("all")
    const [gender,setGender] = useState("all")
    const [brand,setBrand] = useState("all")
    
    const sizeHandler=(size)=>{
        setSize(size)
    }

    const brandHandler = (brand)=>{
        setBrand(brand)
    }

    const genderHandler = (gender)=>{
        setGender(gender)
    }

    const clearAll = ()=>{
        setSize("all")
        setBrand("all")
        setGender("all")
    }

    useEffect(()=>{
        let local = [...products]
        if(sortType==="h2l"){
            local.sort(highToLow);
        }
        if(sortType === "l2h"){
            local.sort(lowToHigh);
        }
        if(sortType==="pop"){
            local=[...products]
        }
        console.log(local)
        setProducts(local)
        
    },[sortType])

    useEffect(()=>{
        let filtered =  dataStore.filter((data)=>{
            let include = true
            if(size!=="all" && data.size !== size ){
              include  =  false
            }
  
            if(gender !=="all" && data.gender !== gender){
                include = false
            }
  
            if(brand!=="all" && data.brand !== brand){
                include = false
            }
            return include;
        })
        setProducts(filtered)
        setSortType((prev)=>prev)
    },[gender,size,brand])

    const sortHandler = (sorter)=>{
        setSortType(sorter)
    }

    return  <Row mt={2} className="justify-content-md-center">
        <Col  xs="1"><div style={{height:"90vh"}} className="d-flex flex-column justify-content-center align-items-center">
        <div>Size:
        <DropdownButton variant={size === "all"?"secondary":"primary"} id="dropdown-size-button" title={size}>
            
  <Dropdown.Item active={size ==="all"} onClick={()=>sizeHandler("all")}>All</Dropdown.Item>
  <Dropdown.Item active={size ==="S"} onClick={()=>sizeHandler("s")}>Small</Dropdown.Item>
  <Dropdown.Item active={size ==="M"} onClick={()=>sizeHandler("m")}>Medium</Dropdown.Item>
  <Dropdown.Item active={size ==="L"} onClick={()=>sizeHandler("l")} >Large</Dropdown.Item>
  <Dropdown.Item active={size ==="XL"} onClick={()=>sizeHandler("xl")} >Extra Large</Dropdown.Item>
</DropdownButton>
</div>

<div>Brand:
        <DropdownButton variant={brand === "all"?"secondary":"primary"} id="dropdown-brand-button" title={brand}>

  <Dropdown.Item  active={brand ==="all"} onClick={()=>brandHandler("all")}>All</Dropdown.Item>
  <Dropdown.Item active={brand ==="rockstar"} onClick={()=>brandHandler("rockstar")}>Rockstar</Dropdown.Item>
  <Dropdown.Item active={brand ==="addidas"} onClick={()=>brandHandler("addidas")}>Addidas</Dropdown.Item>
  <Dropdown.Item active={brand ==="nike"} onClick={()=>brandHandler("nike")} >nike</Dropdown.Item>
  <Dropdown.Item active={brand ==="hp"} onClick={()=>brandHandler("hp")} >HP</Dropdown.Item>
</DropdownButton>
</div>

<div>Ideal for:
        <DropdownButton  variant={gender === "all"?"secondary":"primary"} id="dropdown-gender-button" title={gender}>

  <Dropdown.Item active={gender ==="all"} onClick={()=>genderHandler("all")}>All</Dropdown.Item>
  <Dropdown.Item active={gender ==="man"} onClick={()=>genderHandler("man")}>Man</Dropdown.Item>
  <Dropdown.Item  active={gender ==="woman"} onClick={()=>genderHandler("woman")}>Woman</Dropdown.Item>
</DropdownButton>
</div>
<div><Button  onClick={clearAll}>Clear All</Button></div>
    </div></Col>
        <Col xs="11">
        <Container>
        <ButtonGroup className="my-2">
  <Button variant={sortType === "h2l"?"dark":"secondary"} onClick={()=>sortHandler("h2l")}>High to Low</Button>
  <Button variant={sortType === "pop"?"dark":"secondary"} onClick={()=>sortHandler("pop")}>Popularity</Button>
  <Button variant={sortType === "l2h"?"dark":"secondary"} onClick={()=>sortHandler("l2h")}>Low to High</Button>
  </ButtonGroup>

  <Row>
      {products.map((product)=>{
          return (<Col xs={3} className="my-3">
              <ProductCard product={product}/>
          </Col>)
      })}
  </Row>
  </Container>
  </Col>
    </Row>
}


export default ProductGrid