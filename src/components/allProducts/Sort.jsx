import { useState } from 'react';


const Sort = () => {
    const [Show, setShow] = useState(false)

    return (
        <div className="col-md-12 mt-3 h-auto p-0 sortdiv">
            <form action="" className="d-flex flex-row  sortform  align-items-center py-1" >
                <div><h5 className="pt-1 px-4 SortLabal font-14 font-weight-bold"> sort:</h5></div>
                <label htmlFor="Sort-2" className="Lable-Font checkbox-container-Radio px-4 m-0 position-relative">
                    <span className="Lable-Font font-14 font-weight-bold">New products </span>
                    <input type="radio" id="Sort-2" name="sort" className="Position-Input" value="4" />
                    <span className="radio-CustomRadio"></span>
                </label>
                <label htmlFor="Sort-3" className="Lable-Font checkbox-container-Radio px-4 m-0 position-relative">
                    <span className="Lable-Font font-14 font-weight-bold"> Sellers</span>
                    <input type="radio" id="Sort-3" name="sort" className="Position-Input" value="3" />
                    <span className="radio-CustomRadio"></span>
                </label>
                <label htmlFor="Sort-4" className="Lable-Font checkbox-container-Radio px-4 m-0 position-relative">
                    <span className="Lable-Font font-14 font-weight-bold">Best Sellers</span>
                    <input type="radio" id="Sort-4" name="sort" className="Position-Input" value="4" />
                    <span className="radio-CustomRadio"></span>
                </label>

                <div className=" pl-0 pr-4 d-flex justify-content-center ChangeLayout">
                    <i className={`fa fa-th px-1 ${Show ? "" : " text-danger "}`} onClick={() => setShow(false)}></i>
                    <i className={`fa fa-list  ${Show ? " text-danger" : " "}`} onClick={() => setShow(true)}></i>
                </div>
            </form>
        </div>
    )
}
export default Sort