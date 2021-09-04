import type { NextPage } from 'next';

const Register: NextPage = () => {
  return (
    <div
      className="card mx-auto register-form"
      style={{ marginTop: '40px', marginBottom: '40px' }}
    >
      <article className="card-body" id="register-view">
        <header className="mb-4 d-flex justify-content-between">
          <h3 className="card-title highlight-color">Supplier Registration</h3>
          <h5 className="card-title highlight-color">
            المعلومات المطلوبة للتسجيل في التطبيق
          </h5>
        </header>
        <form id="supplier-form">
          <div className="form-group mb-4">
            <label className="d-flex justify-content-between">
              <span> Service Provider Name </span>
              <span>اسم مزود الخدمة</span>
            </label>
            <input
              name="ProviderName"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label className="d-flex justify-content-between">
              <span> Email </span>
              <span className="d-block">البريد الالكتروني</span>
            </label>
            <input
              name="Email"
              type="email"
              className="form-control"
              required
            />
          </div>
          <div className="mb-4">
            <label className="d-flex justify-content-between">
              <span> Commercial Registration Number </span>
              <span>رقم السجل التجاري</span>
            </label>
            <div className="form-row">
              <div className="col form-group">
                <em
                  style={{ fontSize: '12px' }}
                  className="d-flex justify-content-between"
                >
                  <span> Issue Date </span>
                  <span> تاريخ بدء الترخيص </span>
                </em>
                <input
                  name="CommercialRegistrationNumberIssueDate"
                  type="date"
                  className="form-control"
                  required
                />
              </div>
              <div className="col form-group">
                <em
                  style={{ fontSize: '12px' }}
                  className="d-flex justify-content-between"
                >
                  <span> Expiry Date </span>
                  <span>تاريخ انتهاء الترخيص</span>
                </em>
                <input
                  name="CommercialRegistrationNumberExpiryDate"
                  type="date"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  name="CommercialRegistration"
                  type="file"
                  className="custom-file-input"
                  id="commercialRegistrationFile"
                />
                <label
                  className="custom-file-label"
                  htmlFor="inputGroupFile01"
                  id="commercialRegistrationFilelabel"
                  style={{ fontSize: '13px' }}
                >
                  Upload file
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="d-flex justify-content-between">
              <span> Trading License Number </span>
              <span> رقم الرخصة التجارية </span>
            </label>
            <div className="form-row">
              <div className="col form-group">
                <em
                  style={{ fontSize: '12px' }}
                  className="d-flex justify-content-between"
                >
                  <span> Issue Date </span>
                  <span> تاريخ بدء الترخيص </span>
                </em>
                <input
                  name="TradingLicenseNumberIssueDate"
                  type="date"
                  className="form-control"
                  required
                />
              </div>
              <div className="col form-group">
                <em
                  style={{ fontSize: '12px' }}
                  className="d-flex justify-content-between"
                >
                  <span> Expiry Date </span>
                  <span>تاريخ انتهاء الترخيص</span>
                </em>
                <input
                  name="TradingLicenseNumberExpiryDate"
                  type="date"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  id="tradingLicenseFile"
                  className="custom-file-input"
                  name="TradingLicense"
                />
                <label
                  className="custom-file-label"
                  htmlFor="inputGroupFile01"
                  id="tradingLicenseFilelabel"
                  style={{ fontSize: '13px' }}
                >
                  Upload file
                </label>
              </div>
            </div>
          </div>
          <div className="form-row mb-4">
            <div className="col form-group">
              <label className="d-flex justify-content-between">
                <span>Business type</span>
                <span>مجال الشركة</span>
              </label>
              <input
                name="BusinessType"
                type="text"
                className="form-control"
                required
              />
            </div>
          </div>
          <header className="section-heading heading-line">
            <h5 className="title-section text-uppercase" />
          </header>
          <header className="mb-4 d-flex justify-content-between">
            <h3 className="card-title highlight-color">Company Information</h3>
            <h5 className="card-title highlight-color">معلومات الشركة</h5>
          </header>
          <div className="form-group mb-4">
            <label className="d-flex justify-content-between">
              <span> Client/Manager/Authorized Signature Name </span>
              <span> اسم العميل /المدير/المخول بالتوقيع </span>
            </label>
            <input
              name="ClientManagerAuthorizedSignatureName"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="form-row mb-4">
            <div className="col form-group">
              <label className="d-flex justify-content-between">
                <span> Phone Number </span>
                <span> رقم الهاتف </span>
              </label>
              <input
                name="PhoneNumber"
                type="tel"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="form-group mb-4">
            <label className="d-flex justify-content-between">
              <span> Company Address </span>
              <span> عنوان الشركة </span>
            </label>
            <input
              name="CompanyAddress"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="d-flex justify-content-between">
              <span> Social Media </span>
              <span> لينك مواقع التواصل الاجتماعي </span>
            </label>
            <div className="form-row">
              <div className="form-group col-sm-4 col-12">
                <em
                  style={{ fontSize: '14px' }}
                  className="d-flex justify-content-between"
                >
                  <span> Instagram </span>
                  <span> انستغرام </span>
                </em>
                <input
                  name="SocialMediaInstagram"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group col-sm-4 col-12">
                <em
                  style={{ fontSize: '14px' }}
                  className="d-flex justify-content-between"
                >
                  <span> Snapchat </span>
                  <span> سناب شات </span>
                </em>
                <input
                  name="SocialMediaSnapchat"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group col-sm-4 col-12">
                <em
                  style={{ fontSize: '14px' }}
                  className="d-flex justify-content-between"
                >
                  <span> Twitter </span>
                  <span> تويتر </span>
                </em>
                <input
                  name="SocialMediaTwitter"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="d-flex justify-content-between">
              <span>
                Upload your Company Profile <small>(PDF only)</small>
              </span>
              <span> تحميل الملف التعريفي بالشركة </span>
            </label>
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  id="companyProfile"
                  className="custom-file-input"
                  name="UploadyourCompanyProfilePDF"
                  accept=".pdf"
                />
                <label
                  className="custom-file-label"
                  htmlFor="inputGroupFile01"
                  id="companyProfilelabel"
                  style={{ fontSize: '13px' }}
                >
                  Upload file
                </label>
              </div>
            </div>
          </div>
          <div className="form mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="ContactUsByEmailForSupportAndEnquiry"
                id="emailsupport"
                defaultChecked
                style={{ width: '20px', height: '20px' }}
              />
              <label
                style={{ fontSize: '13px', marginLeft: '20px' }}
                className="d-flex justify-content-between"
              >
                <span style={{ marginTop: '8px' }}>
                  Contact us by email for support and enquiry
                </span>
                <span style={{ marginTop: '8px' }}>
                  مراسلتنا عبر البريد الالكتروني (للمساعدة)
                </span>
              </label>
            </div>
          </div>
          <div className="form mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="ShareOurPlatformWithOthers"
                id="platformshare"
                defaultChecked
                style={{ width: '20px', height: '20px' }}
              />
              <label
                style={{ fontSize: '13px', marginLeft: '20px' }}
                className="d-flex justify-content-between"
              >
                <span style={{ marginTop: '8px' }}>
                  Share our Platform with others
                </span>
                <span style={{ marginTop: '8px' }}>
                  مشاركة التطبيق (رابط بنيان)
                </span>
              </label>
            </div>
          </div>
          <p className="text-danger text-center mb-4" id="text-error" />
          <div className="form-group mt-4">
            <button
              type="submit"
              style={{ maxWidth: '350px' }}
              className="btn btn-primary btn-block m-auto mt-5"
              id="continue-btn-ref"
            >
              Submit
            </button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default Register;
