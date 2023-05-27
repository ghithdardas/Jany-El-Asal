import React from "react";
import logo from "../images/logoo.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
import "./navbar.css";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="left">
          <img className="nav-img" src={logo} alt="logo" />
        </div>
        <div className="right">
          <ul className="menu">
            {/* <li>
              <a href="#" className="menu-item">
                <IoMdArrowDropdown /> الــصـفـحـة الـرئـيـسـيـة
              </a>
              <ul className="dropdown">
                <li>
                  <a href="#part1" className="menu-item1">
                    منطقة التجميع
                  </a>
                </li>
                <li>
                  <a href="#part2" className="menu-item">
                    تكوين الاصول
                  </a>
                </li>
                <li>
                  <a href="#part3" className="menu-item">
                    العملية الديمغرافية
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-item">
                    تشكيل القيمة
                  </a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href="#" className="menu-item">
                الصفحة الرئيسية
              </a>
            </li>

            <li>
              <a href="#stages" className="menu-item">
                مراحل جني العسل
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="home-page">
        <div id="part1">
          <div className="p1-animation">
            <div className="up">
              <img className="img5" src={img5} />
              <img className="img6" src={img6} />
            </div>
            <div className="down">
              <img className="img7" src={img7} />
            </div>
          </div>
        </div>
        <div id="part2">
          <div
            className="left"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            <h1>Honey harvesting strategy</h1>
            <p>
              An Individual goes through deep stages of expertise but as for the
              time limit he or she cannot pass this expertise to others, nor
              they can transform it into an executive model to work upon,
              respectively the expert loses hope of achieving the success he or
              she strives, and they turn into a minus-sign for the community,
              yet, through the recension to be made between their technical
              expertise and the executive power of the next generation they will
              be able to harvest the honey and to convert their expertise into
              doable and developmental expertise.
            </p>
          </div>
          <div
            className="right"
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            <h1>استراتيجية جني العسل</h1>
            <p>
              يمر الإنسان بمراحل من الخبرة العميقة وبسبب عامل الزمن لا يستطيع
              اكساب تلك الخبرة لأطراف أخرى ولا يستطيع ان يحولها الى نموذج تنفيذي
              يستطيع العمل من خلاله فيفقد هذا الخبير أمله في ان يحقق النجاح الذي
              يرجوه أو الثمرة التي يتمناها فيتحول الى خبرة خاملة غير فاعلة في
              المجتمع ومن خلال التنقيح بين خبرته الفنية والقوة التنفيذية للأجيال
              القادمة نجعله يجني العسل وتتحول خبرته إلى خبرة تنموية فاعلة.
            </p>
          </div>
        </div>
        <div className="title" id="stages">
          <h1>مــراحــل جــنــي الــعــســل</h1>
        </div>
        <div id="part3">
          <div className="col1" data-aos="fade-right" data-aos-duration="1500">
            <div className="row1">
              <h2>5-العملية الديمغرافية</h2>
              <p>
                تنشأ العملية الديمغرافية من خلال الدمج بين العلاقات والعلامات
                التجارية من خلال صيغة + 8 أي أن الفرق بين الجيل والجيل + 8 سنوات
                وتتكون العلامة التجارية من جيلين الأول مستوى الخبير ومستوى الجيل
                اللاحق في مدة + 16 سنة.
              </p>
            </div>
            <div className="row2">
              <h2>6-تشكيل القيمة</h2>
              <p>
                خلق وبناء القيمة الغارقة وإعادة تكوين القيم الأخرى مثل القيمة
                الاقتصادية والاحتكارية والسوقية ..الخ من خلال أدوات إيجاد القيمة
                في المجتمع..
              </p>
            </div>
          </div>
          <div className="col2" data-aos="zoom-in-up" data-aos-duration="1500">
            <div className="row1">
              <h2>3-منطقة التجميع</h2>
              <p>
                اﻟﻤﻨﻄﻘﺔ اﻟﺘﻲ ﻳﺘﺤﻮل ﻓﻴﻬﺎ اﻷﺻﻞ ﻣﻦ أﺻﻞ ﻣﻌﺮﻓﻲ إﱃ أﺻﻞ ﻣﺎدي ﻳﺨﻀﻊ
                ﻟﻠﺘﻘﻴﻴﻢ اﻟﻤﺎﻟﻲ.
              </p>
            </div>
            <div className="row2">
              <h2>4-تكوين الأصول</h2>
              <p>وهي مرحلة التحول إلى نموذج أصول.</p>
            </div>
          </div>
          <div className="col3" data-aos="fade-left" data-aos-duration="1000">
            <div className="row1">
              <h2>1-إعادة التعريف</h2>
              <p>
                إعادة تشكيل نمط الخبرة السابقة الغير مدرك لدى الخبير في نموذج
                عمل مبني على علامة تجارية تجمع بين العلامة التجارية الطبيعية
                والعلامة التجارية الاعتبارية.
              </p>
            </div>
            <div className="row2">
              <h2>2-التكامل الكلي في السلاسل</h2>
              <p>
                اﻻﻧﺪﻣﺎج اﻟﺘﻨﻈﻴﻤﻲ واﻟﻬﻴﻜﻠﻲ ﻣﻦ ﺧﻼل ﻣﺠﺎﻟﺲ إدارة ﻳﺪﻣﺞ ﺑﻴﻦ ﻣﺠﻤﻮﻋﺔ
                إﺟﻴﺎل.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
