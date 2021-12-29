import { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';


const CardCustomer = ({ managerFullName, isMobile, verifiedCode, phoneNumber, email, provinceTitle, faxNumber, countyTitle, address, afterSaleTypes }) => {

    return (
        <Fragment>


            {

                isMobile

                    ?

                    <div className="rtl col-12 px-0" >
                        <div className="col-12  header-Scroll-aftesale  border-raduis_2 py-3 bk-grayR   px-0 ">
                            <div className=" col-12  d-flex title-header c-grayH py-1 my-auto   px-0 ">
                                <span className="col-6 titleOne c-grayH font-13 pb-2">مدیریت</span>
                                <span className="col-6 px-0 text-dark font-13 font-weight-bold">{managerFullName}</span>
                            </div>
                            <div className=" col-12  d-flex title-header c-grayH py-1 my-auto  px-0 " >
                                <span className=" col-6  tit leOne c-grayH font-13 pb-2">کد عاملیت مجاز</span>
                                <span className=" col-6 px-0  text-dark font-13 font-weight-bold">{verifiedCode}</span>
                            </div>
                            <div className=" col-12  d-flex title-header c-grayH py-1 my-auto  px-0  ">
                                <span className="col-6  titleOne c-grayH font-13 pb-2">تلفن</span>
                                <span className="col-6 px-0  text-dark font-13 font-weight-bold"> <span dangerouslySetInnerHTML={{ __html: phoneNumber }} /></span>
                            </div>
                        </div>
                        <div className="Box-Content col-12 py-4 d-flex  flex-wrap" >
                            <div className="col-md-12 px-0 d-flex">
                                <p className="titleOne font-13 c-grayH ">ایمیل</p>
                                <p className=" font-weight-bold font-13 ">{email}</p>
                            </div>
                            <div className="col-md-12 px-0 d-flex">
                                <p className="titleOne font-13 c-grayH  ">استان</p>
                                <p className=" font-weight-bold font-13 ">{provinceTitle}</p>
                            </div>
                            <div className="col-md-12 px-0 d-flex">
                                <p className="titleOne font-13 c-grayH ">فکس</p>
                                <p className=" font-weight-bold font-13 ">{faxNumber}</p>
                            </div>
                            <div className="col-md-12 px-0 d-flex">
                                <p className="titleOne font-13 c-grayH  ">شهرستان</p>
                                <p className=" font-weight-bold font-13 ">{countyTitle}</p>
                            </div>
                            <hr className="aftersales-HrTopMap" />

                            <div className="col-12 px-0  pb-5 pt-3 ">
                                <span className="titleOne font-13 c-grayH pb-4 d-block font-weight-bold">ادرس عاملیت</span>
                                <div className="bg-white Box-Addres font-13 line-height_2 font-weight-bold border-raduis_2 p-2 d-block w-100">{address}</div>
                            </div>
                            <hr className="aftersales-HrTopMap" />


                            <div className="col-md-12 ">
                                <div className="d-flex row mb-4 ">
                                    <div className="col-md-12 px-0">
                                        <p className="titleOne font-13 c-grayH  font-weight-bold ">
                                            نوع تعمیرات
                                        </p>
                                    </div>

                                    <ul className="d-flex flex-wrap  border-raduis_2 w-100 pl-2 Background-Mobile">
                                        {afterSaleTypes.map(afterSaleType =>
                                            <li className="col-4 d-flex px-0 mt-2" key={uuidv4()}>
                                                <span className="material-icons Color-Custom" key={uuidv4()}>
                                                    check
                                                </span>
                                                <span className="Span-Category" key={uuidv4()}>{afterSaleType.title}</span>
                                            </li>
                                        )}


                                    </ul>




                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="rtl col-12 px-0" >

                        <div className="bk-grayA font-14 col-12 py-2">
                            <div className="title-header pt-1  col-4 px-0 text-left">

                                <span className="titleOne c-grayH ">تلفن : </span>
                                <span className="text-dark font-weight-bold"><span dangerouslySetInnerHTML={{ __html: phoneNumber }} /></span>
                            </div>
                            <div className="title-header  pt-1 col-4 px-0 text-center">
                                <span className="titleOne c-grayH ">کد عاملیت مجاز : </span>
                                <span className="text-dark font-weight-bold"> {verifiedCode} </span>
                            </div>


                            <div className="title-header pt-1  col-4 px-0 text-right">
                                <span className="titleOne c-grayH">مدیریت : </span>
                                <span className="text-dark font-weight-bold"> {managerFullName} </span>
                            </div>

                        </div>
                        <div className="border mb-3 font-14 col-12 py-2 d-flex align-items-center px-0" >
                            <div className="col-md-7 border-left px-0 py-2">
                                <div className="col-md-6 d-flex">
                                    <span className="titleOne c-grayC pl-1">ایمیل</span>
                                    <p className=" font-weight-bold">{email}</p>
                                </div>
                                <div className="col-md-6 d-flex">
                                    <span className="titleOne c-grayC pl-1">استان</span>
                                    <p className=" font-weight-bold">{provinceTitle}</p>
                                </div>
                                <div className="col-md-6 d-flex">
                                    <span className="titleOne c-grayC pl-1">فکس</span>
                                    <p className=" font-weight-bold">{faxNumber}</p>
                                </div>
                                <div className="col-md-6 d-flex">
                                    <span className="titleOne c-grayC pl-1">شهرستان</span>
                                    <p className=" font-weight-bold">{countyTitle}</p>
                                </div>
                                <div className="col-12 ">
                                    <span className="titleOne c-grayC pl-1">ادرس عاملیت</span>
                                    <div className="Box-Addres font-weight-bold p-2 col-12 bk-grayA mt-1">{address}</div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="col-12 px-0">
                                    <p className="mb-2 c-grayC pl-1">
                                        نوع تعمیرات
                                    </p>
                                </div>

                                <div className="col-12 px-0 font-14">
                                    <ul className="row d-block">
                                        {afterSaleTypes.map(afterSaleType =>
                                            <li className="col-4 float-right">

                                                <i className="fa fa-check c-green ml-1"></i>
                                                <span className="Span-Category">{afterSaleType.title}</span>
                                            </li>
                                        )}


                                    </ul>
                                </div>

                            </div>


                        </div>
                    </div>
            }
            {/* <div>
                <BrowserView>
                   
                </BrowserView>
            </div>
            <div >
                <MobileView>
                  
                </MobileView>
            </div> */}
        </Fragment>
    )
}

export default CardCustomer;