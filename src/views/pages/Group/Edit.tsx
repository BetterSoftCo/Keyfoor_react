import Layout from "../../layout/Layout";
import { GallleryAdd, AvatarImage } from "../../../assets";
import ProfileNav from "../../components/profile-nav";
import GroupController from "../../controllers/group-controllers";

class EditGroup extends GroupController {
  render() {
    return (
      <Layout>
        <div className="room-privacy privacy">
          <div className="room-privacy-header">
            <ProfileNav
              backLink={"/group/setting"}
              title={"حریم خصوصی گروه"}
            />
          </div>
          <div className="divider"></div>
          <div className="room-privacy-content">
            <div className="d-flex flex-column align-items-center justify-content-between my-3">
              <div className="d-flex">
                <button className="">
                  <img src={GallleryAdd} alt="gallery-Add" />
                </button>
                <img src={AvatarImage} />
              </div>
            </div>
            <div className="edit-Form-Container profile-Options mx-auto">
              <div className="one ">
                <label className="my-2 mx-2">نام گروه</label>
                <div className="edit-Input-Container">
                  <input placeholder="بچه های شمرون" className="edit-Input" />
                  {/* <input placeholder="Spelendor12" className="text-left edit-Input-2" /> */}
                </div>
              </div>
              <div className="two">
                <label className="mb-2 mx-2">در مورد این گروه</label>
                <textarea
                  className="textarea"
                  placeholder="بپه های شمرون ها اینجا هستند تا ..."
                ></textarea>
              </div>
            </div>
            <button className="room-botton">
              <h6 className="text-button">ثبت تغییرات</h6>
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}
export default EditGroup;
{
  /* <div className="mt-4 col-10 ">
          <div className="mt-3 border-bottom">
            <ProfileNav backLink="#" title="ویرایش مشخصات گروه" />
          </div>
          <div className="d-flex flex-column align-items-center justify-content-between my-3">
            <div className="d-flex">
              <button className="">
                <img src={GallleryAdd} alt="gallery-Add" />
              </button>
              <img src={AvatarImage} />
            </div>
          </div>
          <div className="" style={{ position: "relative", height: "62vh" }}>
            <div className=" group-Options">
              <div className="w-100 input-Container d-flex flex-column align-items-start ">
                <label>نام گروه</label>
                <div className="w-100 d-flex ">
                  <input
                    type="text"
                    placeholder="بچه های شمرون"
                    className="w-100 mt-3"
                  />
                </div>
              </div>
              <div className="w-100 input-container d-flex flex-column align-items-start mt-4 ">
                <label> در مورد این گروه</label>
                <div className="w-100 d-flex ">
                  <textarea
                    placeholder="بچه های شمرون ها اینجا هستند تا ..."
                    className="w-100 mt-3"
                  />
                </div>
              </div>
            </div>
            <div
              className="align-self-end w-100"
              style={{ position: "absolute", bottom: "0" }}
            >
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
                    <span className="mx-2">ثبت تغییرات</span>
                  </div>
                }
              ></LabelButton>
            </div>
          </div>
        </div> */
}
