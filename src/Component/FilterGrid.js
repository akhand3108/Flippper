import {ButtonGroup, DropdownButton,Dropdown} from "react-bootstrap"

const  FilterGrid = (filters)=>{
    const {size,setSize,gender,setGender,brand,setBrand} = filters
    const sizeHandler=(size)=>{
        setSize(size)
    }

    const brandHandler = (brand)=>{
        setBrand(brand)
    }

    const genderHandler = (gender)=>{
        setGender(gender)
    }

    return <div style={{height:"90vh"}} className="d-flex flex-column justify-content-center align-items-center">
        <div>Size:
        <DropdownButton variant="secondary"  id="dropdown-size-button" title="All">
            
  <Dropdown.Item active={size ==="all"} onClick={()=>sizeHandler("all")}>All</Dropdown.Item>
  <Dropdown.Item active={size ==="S"} onClick={()=>sizeHandler("S")}>Small</Dropdown.Item>
  <Dropdown.Item active={size ==="M"} onClick={()=>sizeHandler("M")}>Medium</Dropdown.Item>
  <Dropdown.Item active={size ==="L"} onClick={()=>sizeHandler("L")} >Large</Dropdown.Item>
  <Dropdown.Item active={size ==="XL"} onClick={()=>sizeHandler("XL")} >Extra Large</Dropdown.Item>
</DropdownButton>
</div>

<div>Brand:
        <DropdownButton variant="secondary" id="dropdown-brand-button" title="All">

  <Dropdown.Item  active={brand ==="all"} onClick={()=>brandHandler("all")}>All</Dropdown.Item>
  <Dropdown.Item active={brand ==="rockstar"} onClick={()=>brandHandler("rockstar")}>Rockstar</Dropdown.Item>
  <Dropdown.Item active={brand ==="addidas"} onClick={()=>brandHandler("addidas")}>Addidas</Dropdown.Item>
  <Dropdown.Item active={brand ==="nike"} onClick={()=>brandHandler("nike")} >nike</Dropdown.Item>
  <Dropdown.Item active={brand ==="hp"} onClick={()=>brandHandler("hp")} >HP</Dropdown.Item>
</DropdownButton>
</div>

<div>Ideal for:
        <DropdownButton  variant="secondary" id="dropdown-gender-button" title="All">

  <Dropdown.Item active={gender ==="all"} onClick={()=>genderHandler("All")}>All</Dropdown.Item>
  <Dropdown.Item active={gender ==="m"} onClick={()=>genderHandler("m")}>Man</Dropdown.Item>
  <Dropdown.Item  active={gender ==="f"} onClick={()=>genderHandler("f")}>Woman</Dropdown.Item>
</DropdownButton>
</div>
    </div>
}

export default FilterGrid