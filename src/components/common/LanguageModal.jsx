import { Fragment, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { currentlanguageCode } from '../../../next.config';
import { ContinentGetAll } from "../Services/otherApi";
var {text}=require('../translate-files/'+currentlanguageCode+'.json');
const LanguageModal = ({ showLanguageModal, handleCloseFunc }) => {
  const [continents, setContinents] = useState([]);

  const handleClose = (e) => {
    e.stopPropagation();
  };

  const closeallOpenModal = () => {
    setShowLanguageModal(false);
    setShowMenu(false);
  };

  useEffect(() => {
    //filter lang in modal
    $("#lang-search").on("keyup", function () {
      var value = $(this).val().toLowerCase();

      $(".world-ul li ").filter(function () {
        var o = $(this).toggle(
          $(this).text().toLowerCase().indexOf(value) > -1
        );
      });

      $(".world-ul ").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
    async function CallApi() {
      const res = await ContinentGetAll();

      setContinents(res.data.response);
    }
    CallApi();
  }, []);
  return (
    <div
      className={`language-box  ${showLanguageModal ? "SlideOpen" : "Slideclose"
        }`}
      onClick={handleClose}>
      <div className='px-4 pt-4'>
        <div className='text-left'>
          <button
            onClick={handleCloseFunc}
            type='button'
            className='close'
            aria-label='Close'>
            <i className='fa c-white fa-times fa-fw'></i>
          </button>
        </div>
      </div>
      <input
        type='text'
        className='language-search-input autofocus input-search d-block w-75 mx-auto text-white text-center'
        name='lang-search'
        id='lang-search'
        placeholder={`${text.EnterCountryName}..`}
      />

      <Scrollbars
        className='language-ScrollBars d-block px-5 ltr'
        universal={true}>
        <div className='continent-container'>
          {continents.map((continent, i) => (
            <ul
              key={i + 100}
              className='row list-unstyled pl-3 col-md-12 world-ul'>
              <p
                key={i + 200}
                itemProp='name'
                className=' col-md-12 world text-white contyTitle'>
                {continent.title}
              </p>
              {continent.country.map((ctry, i) =>
                ctry.countryLanguages.length == 0 ? null : (
                  <li
                    key={i + 300}
                    itemProp='itemListElement'
                    itemScope=''
                    className='col-md-2 mt-1 contContainer'>
                    <span
                      key={i + 400}
                      className={`bg-${ctry.title} position-absolute mr-3`}></span>{" "}
                    <span key={i + 500} className='contry text-white'>
                      {ctry.title}
                    </span>
                    {ctry.countryLanguages.map((countryLanguage, index, []) => (
                      <Fragment key={index + 900}>
                        <span
                          key={index + 700}
                          className={`${index > 0 ?'d-inline-block':'d-none'} text-white vir`}>
                        </span>
                        <a
                          key={index + 800}
                          itemProp='url'
                          href={`/${countryLanguage.language.code}`}
                          className='contry-add'>
                          {countryLanguage.language.title}
                        </a>
                      </Fragment>
                    ))}
                  </li>
                )
              )}
            </ul>
          ))}
        </div>
      </Scrollbars>
    </div>
  );
};

export default LanguageModal;
