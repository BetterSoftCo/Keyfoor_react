import { Theme } from "utilities_js";
import { Facebook, Instagram, Twiter, Youtube } from "../../../assets";
import { LabelButton } from "../../components/label_button";

function Footer() {
  return (
    <div className="footer">
      <div className="row box-footer">
        <div className="col-md-5 right">
          <LabelButton
            type={Theme.dark}
            minHeight="50px"
            fontSize="15px"
            borderRadius="10px"
            minWidth="100%"
            className="mb-3"
            backgroundColor="#00DE8E"
            color="#FFFFFF"
            border="none"
            boxShadow="0px 0px 20px rgba(0, 222, 142, 0.5)"
            children={
              <div className="w-100">
                <span className="mx-2">تماس با پشتیبانی</span>
              </div>
            }
          ></LabelButton>
          <span className="mb-3 keyfoor">KEYFOOR</span>
          <p className="desc">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div className="col-md-5 left">
          <div>
            <h4 className="title">مجله کیفور</h4>
            <ul>
              <li>بازی های پرطرفدار در بلاد کفر</li>
              <li>بازی های پرطرفدار در بلاد کفر</li>
              <li>بازی های پرطرفدار در بلاد کفر</li>
            </ul>
            <h4 className="title">درباره کیفور بیشتر بدانید</h4>
            <h4 className="title">فروشگاه آنلاین کیفور</h4>
          </div>
          <div className="links">
            <a href="./">
              <img src={Instagram} alt="instagram" />
            </a>
            <a href="./">
              <img src={Twiter} alt="twiter" />
            </a>
            <a href="./">
              <img src={Youtube} alt="youtube" />
            </a>
            <a href="./">
              <img src={Facebook} alt="faceboook" />
            </a>
          </div>
          <p className="caption">
            کلیه حقوق مادی و معنوی این وبسایت متعلق به مجموعه کیفکوک می باشد
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
